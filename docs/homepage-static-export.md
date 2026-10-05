# Homepage data export for GitHub Pages

The public CMS API is not available to GitHub Pages, so production reads
public/data/homepage.json and images under public/data/cms-media/. This
snapshot is generated from the CMS public API; it is not hand-authored fixture
content.

## Refreshing the snapshot

1. Start the local CMS so its public API is reachable.
2. From the frontend repository, run npm run sync:homepage.
   The default API base is http://127.0.0.1:8000/api. To use another CMS
   origin, set HOMEPAGE_CMS_API_URL to its /api URL before running the
   command.
3. Review and include the updated public/data/homepage.json and any new files
   in public/data/cms-media/ in the normal frontend deployment.

The exporter reads /news, /heroes, and /announcements. The current CMS
public endpoints expose published news, active heroes, and currently active
popup announcements. It downloads only the images referenced by those records,
stores them by SHA-256, and rewrites the snapshot image URLs to local paths.
It fails without replacing the JSON snapshot if any endpoint or image request
fails. It does not write to the CMS or its database.

Because the CMS popup endpoint only exposes popups active at export time, run
the export again when a scheduled popup becomes active or content changes.
The exported publish dates are kept intact, so an exported popup still stops
showing at its configured end time.

When a production API becomes available, VITE_API_BASE_URL can be set for the
production build. The existing live API path takes precedence over this
snapshot.
