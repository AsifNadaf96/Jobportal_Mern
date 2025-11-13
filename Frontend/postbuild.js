import fs from "fs";
import path from "path";

const repoBase = "/Jobportal_Mern/"; // <-- change if your repo name is different
const distDir = path.join(process.cwd(), "dist");
const redirectContent = `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="refresh" content="0; url=${repoBase}" />
  </head>
  <body></body>
</html>`;

if (!fs.existsSync(distDir)) {
  console.error("dist folder not found. Run the build first or check path.");
  process.exit(1);
}
fs.writeFileSync(path.join(distDir, "404.html"), redirectContent);
console.log("? 404.html added to dist for GitHub Pages redirect");
