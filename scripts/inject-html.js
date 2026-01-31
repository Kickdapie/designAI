/**
 * Injects UI HTML (with bundle inlined) into dist/code.js for Figma plugin.
 * Figma's iframe has no base URL for external scripts, so we inline the bundle
 * into the HTML so the app runs without loading bundle.js from a URL.
 */
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const uiPath = path.join(distDir, "ui.html");
const bundlePath = path.join(distDir, "bundle.js");
const codePath = path.join(distDir, "code.js");

if (!fs.existsSync(uiPath)) {
  console.error("dist/ui.html not found. Run build:ui and copy ui.html to dist first.");
  process.exit(1);
}
if (!fs.existsSync(bundlePath)) {
  console.error("dist/bundle.js not found. Run build:ui first.");
  process.exit(1);
}
if (!fs.existsSync(codePath)) {
  console.error("dist/code.js not found. Run build:code first.");
  process.exit(1);
}

let html = fs.readFileSync(uiPath, "utf8");
let bundle = fs.readFileSync(bundlePath, "utf8");
// Escape </script> in bundle so it doesn't close the inline script tag (HTML5)
bundle = bundle.replace(/<\/script>/gi, "<\\/script>");
// Figma's iframe may reject scripts containing the literal token "import".
// Use Unicode escapes for the whole word so the source never contains ASCII "import".
bundle = bundle.replace(/\bimport\b/g, "\\u0069\\u006d\\u0070\\u006f\\u0072\\u0074");
// Inline the bundle so the iframe doesn't need to load bundle.js (no base URL in Figma)
html = html.replace(
  /<script\s+src="bundle\.js"><\/script>/i,
  "<script>\n" + bundle + "\n</script>"
);

const codeContent = fs.readFileSync(codePath, "utf8");
// Use __pluginUiHtml__ to avoid "invalid redefinition of lexical identifier" when Figma injects __html__
const injected = "var __pluginUiHtml__ = " + JSON.stringify(html) + ";\n" + codeContent;
fs.writeFileSync(codePath, injected);
console.log("Injected __pluginUiHtml__ (with inlined bundle) into dist/code.js");
