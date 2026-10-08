import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(
    dirname(fileURLToPath(import.meta.url)),
    ".."
);

const apiBaseUrl = (
    process.env.HOMEPAGE_CMS_API_URL ||
    process.env.VITE_API_BASE_URL ||
    "http://127.0.0.1:8000/api"
).replace(/\/+$/, "");

const apiBase = new URL(apiBaseUrl);
const cmsOrigin = apiBase.origin;

const output = resolve(
    root,
    "public/data/galleries.json"
);

const mediaDirectory = resolve(
    root,
    "public/data/cms-media"
);

const extensions = new Map([
    ["image/jpeg", "jpg"],
    ["image/png", "png"],
    ["image/webp", "webp"],
    ["image/avif", "avif"],
]);

function sourceUrl(item) {
    if (item.image_url) {
        return new URL(
            item.image_url,
            cmsOrigin + "/"
        );
    }

    if (item.image) {
        return new URL(
            "/storage/" +
                String(item.image).replace(/^\/+/, ""),
            cmsOrigin
        );
    }

    return null;
}

async function exportImage(item, label) {
    const source = sourceUrl(item);

    if (!source) {
        return {
            ...item,
            image_url: null,
        };
    }

    if (source.origin !== cmsOrigin) {
        throw new Error(
            label + ": origin gambar tidak sesuai CMS."
        );
    }

    const response = await fetch(source);

    if (!response.ok) {
        throw new Error(
            label +
                ": HTTP " +
                response.status
        );
    }

    const mime = (
        response.headers.get("content-type") || ""
    )
        .split(";")[0]
        .trim()
        .toLowerCase();

    const extension = extensions.get(mime);

    if (!extension) {
        throw new Error(
            label +
                ": tipe media tidak didukung: " +
                mime
        );
    }

    const bytes = Buffer.from(
        await response.arrayBuffer()
    );

    const hash = createHash("sha256")
        .update(bytes)
        .digest("hex");

    const filename =
        hash + "." + extension;

    await mkdir(
        mediaDirectory,
        { recursive: true }
    );

    await writeFile(
        resolve(
            mediaDirectory,
            filename
        ),
        bytes
    );

    return {
        ...item,
        image_url:
            "cms-media/" + filename,
    };
}

async function main() {
    const response = await fetch(
        apiBaseUrl + "/galleries"
    );

    if (!response.ok) {
        throw new Error(
            "galleries: HTTP " +
                response.status
        );
    }

    const body = await response.json();

    if (
        !body ||
        !Array.isArray(body.categories) ||
        !Array.isArray(body.data)
    ) {
        throw new Error(
            "Format /galleries tidak valid."
        );
    }

    const data = [];

    for (
        let i = 0;
        i < body.data.length;
        i++
    ) {
        const item = body.data[i];

        const exported =
            await exportImage(
                item,
                "galleries[" + i + "]"
            );

        const images =
            Array.isArray(item.images)
                ? await Promise.all(
                      item.images.map(
                          (photo, photoIndex) =>
                              exportImage(
                                  photo,
                                  "galleries[" +
                                      i +
                                      "].images[" +
                                      photoIndex +
                                      "]"
                              )
                      )
                  )
                : [];

        data.push({
            ...exported,
            images,
        });
    }

    const snapshot = {
        schema_version: 1,
        exported_at:
            new Date().toISOString(),
        categories: body.categories,
        data,
    };

    await mkdir(
        dirname(output),
        { recursive: true }
    );

    await writeFile(
        output,
        JSON.stringify(
            snapshot,
            null,
            2
        ) + "\n",
        "utf8"
    );

    console.log(
        "Gallery snapshot exported: " +
            data.length +
            " galleries."
    );

    console.log(
        "Snapshot: " + output
    );
}

main().catch((error) => {
    console.error(
        "Gallery snapshot export FAILED:"
    );
    console.error(error);
    process.exit(1);
});
