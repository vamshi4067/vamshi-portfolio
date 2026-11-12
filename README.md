# Vamshi Gunnala — Portfolio

A standalone, static portfolio containing an interactive Salesforce project in `demo/`. Experience and credentials are drawn from the supplied resume; education and title are user-provided. The demo is sample data, and its Salesforce org source is available from the project card.

## Preview

Run `python3 -m http.server 8081` in this directory and visit http://localhost:8081.

## Netlify

Drag this folder to Netlify or connect it as a Git repository with this folder as the base and publish directory. It needs no build command. If deploying within an existing repository, set the base directory to `portfolio` and the publish directory to `.`.

The files in `demo/` are the built Service Studio demo, adjusted to work under the `/demo/` path. To refresh it after source changes, rebuild `service-studio`, copy its clean `dist` directory, and reapply the `/demo/` asset, source, and download paths.

Font: DM Sans, SIL Open Font License, in `assets/OFL.txt`.
