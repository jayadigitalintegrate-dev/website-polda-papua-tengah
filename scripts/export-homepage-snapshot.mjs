import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const apiBaseUrl = (
    process.env.HOMEPAGE_CMS_API_URL ||
    process.env.VITE_API_BASE_URL ||
    "http://127.0.0.1:8000/api"
).replace(/\/+$/, "");
const apiBase = new URL(apiBaseUrl);
const cmsOrigin = apiBase.origin;
const snapshotPath = resolve(projectRoot, "public/data/homepage.json");
const mediaDirectory = resolve(projectRoot, "public/data/cms-media");
const imageExtensions = new Map([
    ["image/jpeg", "jpg"],
    ["image/png", "png"],
    ["image/webp", "webp"],
    ["image/avif", "avif"],
]);

async function getArray(path) {
    const response = await fetch(apiBaseUrl + "/" + path, {
        signal: AbortSignal.timeout(15000),
        headers: { Accept: "application/json" },
    });

    if (!response.ok) {
        throw new Error(path + ": HTTP " + response.status);
    }

    const body = await response.json();
    const result = Array.isArray(body)
        ? body
        : Array.isArray(body?.value)
        ? body.value
        : null;

    if (!result) {
        throw new Error(path + ": respons bukan array JSON");
    }

    return result;
}

function getImageSource(item) {
    if (typeof item.image_url === "string" && item.image_url) {
        return new URL(item.image_url, cmsOrigin + "/");
    }

    if (typeof item.image === "string" && item.image) {
        return new URL(
            "/storage/" + item.image.replace(/^\/+/, ""),
            cmsOrigin
        );
    }

    return null;
}

async function makeStaticMedia(item, label) {
    const source = getImageSource(item);

    if (!source) {
        return { ...item, image_url: null };
    }

    if (source.origin !== cmsOrigin) {
        throw new Error(label + ": URL gambar berada di origin berbeda.");
    }

    const response = await fetch(source, {
        signal: AbortSignal.timeout(20000),
    });

    if (!response.ok) {
        throw new Error(label + ": unduh gambar HTTP " + response.status);
    }

    const mimeType = (response.headers.get("content-type") || "")
        .split(";")[0]
        .trim()
        .toLowerCase();
    const extension = imageExtensions.get(mimeType);

    if (!extension) {
        throw new Error(
            label + ": tipe gambar tidak didukung (" + (mimeType || "unknown") + ")."
        );
    }

    const bytes = Buffer.from(await response.arrayBuffer());

    if (bytes.length > 25 * 1024 * 1024) {
        throw new Error(label + ": ukuran gambar melebihi 25 MB.");
    }

    const digest = createHash("sha256").update(bytes).digest("hex");
    const filename = digest + "." + extension;

    await mkdir(mediaDirectory, { recursive: true });
    await writeFile(resolve(mediaDirectory, filename), bytes);

    return {
        ...item,
        image_url: "cms-media/" + filename,
    };
}

async function exportCollection(items, label) {
    return Promise.all(
        items.map((item, index) =>
            makeStaticMedia(item, label + "[" + index + "]")
        )
    );
}

const [news, heroes, announcements] = await Promise.all([
    getArray("news"),
    getArray("heroes"),
    getArray("announcements"),
]);

const snapshot = {
    schema_version: 1,
    exported_at: new Date().toISOString(),
    news: await exportCollection(news, "news"),
    heroes: await exportCollection(heroes, "heroes"),
    announcements: await exportCollection(announcements, "announcements"),
};

await mkdir(dirname(snapshotPath), { recursive: true });
await writeFile(
    snapshotPath,
    JSON.stringify(snapshot, null, 2) + "\n",
    "utf8"
);

console.log(
    "Homepage snapshot exported: " + snapshot.news.length + " news, " +
    snapshot.heroes.length + " heroes, " +
    snapshot.announcements.length + " announcements."
);
console.log("Snapshot: " + snapshotPath);
