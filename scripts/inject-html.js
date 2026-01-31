/**
 * Injects __html__ (dist/ui.html content) into dist/code.js for Figma plugin.
 * Run after: build ui -> dist/bundle.js, copy ui.html -> dist/ui.html, build code -> dist/code.js
 */
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const uiPath = path.join(distDir, "ui.html");
const codePath = path.join(distDir, "code.js");

if (!fs.existsSync(uiPath)) {
  console.error("dist/ui.html not found. Run build:ui and copy ui.html to dist first.");
  process.exit(1);
}
if (!fs.existsSync(codePath)) {
  console.error("dist/code.js not found. Run build:code first.");
  process.exit(1);
}

const html = fs.readFileSync(uiPath, "utf8");
const codeContent = fs.readFileSync(codePath, "utf8");
// Use __pluginUiHtml__ to avoid "invalid redefinition of lexical identifier" when Figma injects __html__
const injected = "var __pluginUiHtml__ = " + JSON.stringify(html) + ";\n" + codeContent;
fs.writeFileSync(codePath, injected);
console.log("Injected __pluginUiHtml__ into dist/code.js");
