import fs from "node:fs";

// Run after the production build, against a local server or the production alias.
const base = process.argv[2] || "http://127.0.0.1:3001";
const manifest = JSON.parse(fs.readFileSync(".next/prerender-manifest.json", "utf8"));
const routes = Object.keys(manifest.routes).filter(path => !path.startsWith("/_"));
const assets = new Set(["/videos/gemini_generated_video_8cab5f87.mp4", "/videos/productvideo.mp4"]);
const destinations = new Set();
const pages = new Map();
const failures = [];
for (const path of routes) {
  const response = await fetch(new URL(path, base));
  const html = await response.text();
  pages.set(path, html);
  if (!response.ok) failures.push(`${path}: HTTP ${response.status}`);
  for (const match of html.matchAll(/(?:src|href)="([^"<>]+)"/g)) {
    const value = match[1].replaceAll("&amp;", "&");
    if (value.startsWith("/_next/image")) {
      const asset = new URL(value, base).searchParams.get("url");
      if (asset?.startsWith("/")) assets.add(asset);
    } else if (/^\/(images|videos)\//.test(value)) assets.add(value);
    else if (value.startsWith("/ohio-preview")) destinations.add(value.split("#")[0]);
  }
}
for (const path of new Set([...assets, ...destinations])) {
  const response = await fetch(new URL(path, base), { method: "HEAD" });
  if (!response.ok) failures.push(`${path}: HTTP ${response.status}`);
}
const tuning = pages.get("/ohio-preview/explore/customisation-build") || "";
if (!tuning.includes('id="autotuning"')) failures.push("Customisation Build: missing #autotuning");
const homepage = pages.get("/ohio-preview") || "";
if (homepage.includes("View Second Ohio Preview")) failures.push("Homepage: prominent preview selector returned");
if (!homepage.includes("INVISIBLE PROTECTION, MAXIMUM CONFIDENCE")) failures.push("Homepage: missing approved supporting copy");
console.log(JSON.stringify({ base, routes: routes.length, assets: assets.size, linkedRoutes: destinations.size, failures }, null, 2));
if (failures.length) process.exitCode = 1;
