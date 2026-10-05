export interface HomepageSnapshot {
    news: Record<string, unknown>[];
    heroes: Record<string, unknown>[];
    announcements: Record<string, unknown>[];
}

let snapshotRequest: Promise<HomepageSnapshot> | undefined;

/**
 * Loads the CMS export used by static hosting when no production API exists.
 * The same promise is shared by the homepage's news, hero, and popup services.
 */
export function fetchHomepageSnapshot(): Promise<HomepageSnapshot> {
    snapshotRequest ??= fetch(
        `${import.meta.env.BASE_URL}data/homepage.json`,
        {
            cache: "no-cache",
            signal: AbortSignal.timeout(10000),
        }
    )
        .then(async (response) => {
            if (!response.ok) {
                throw new Error(
                    `Gagal mengambil snapshot homepage. HTTP ${response.status}`
                );
            }

            const result: unknown = await response.json();

            if (
                !result ||
                typeof result !== "object" ||
                !Array.isArray((result as HomepageSnapshot).news) ||
                !Array.isArray((result as HomepageSnapshot).heroes) ||
                !Array.isArray((result as HomepageSnapshot).announcements)
            ) {
                throw new Error("Format snapshot homepage tidak valid.");
            }

            return result as HomepageSnapshot;
        });

    return snapshotRequest;
}

/** Resolve a media path written by scripts/export-homepage-snapshot.mjs. */
export function resolveHomepageMediaUrl(
    url: string | null | undefined
): string | null {
    if (!url) {
        return null;
    }

    if (
        url.startsWith("http://") ||
        url.startsWith("https://") ||
        url.startsWith("//") ||
        url.startsWith("data:")
    ) {
        return url;
    }

    if (url.startsWith("cms-media/")) {
        return `${import.meta.env.BASE_URL}data/${url}`;
    }

    return url;
}
