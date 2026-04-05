#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { Marp } from "@marp-team/marp-core";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Usage: marp-debug <file.md> [--theme theme.css] [--output out.html]");
  process.exit(1);
}

const inputFile = args[0];
const themeArg = args.indexOf("--theme");
const outArg = args.indexOf("--output");

const themeFile = themeArg !== -1 ? args[themeArg + 1] : null;
const outFile = outArg !== -1 ? args[outArg + 1] : "debug.html";

// Load markdown
const markdown = fs.readFileSync(inputFile, "utf8");

// Load theme (must include @theme header)
let themeSet = [];
if (themeFile) {
  const themePath = path.resolve(themeFile);
  const themeCSS = fs.readFileSync(themePath, "utf8");

  themeSet.push(themeCSS);
}

// Create Marp instance
const marp = new Marp({
  allowLocalFiles: true,
  html: true,
  minifyCSS: false,
});

// Register custom theme(s)
for (const css of themeSet) {
  marp.themeSet.add(css);
}

// Render
const { html, css } = marp.render(markdown);

// Output HTML
const finalHtml = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
${css}
</style>
</head>
<body>
${html}
</body>
</html>
`;

fs.writeFileSync(outFile, finalHtml, "utf8");

console.log(`✔ Rendered ${inputFile} → ${outFile}`);
if (themeFile) console.log(`✔ Loaded theme: ${themeFile}`);
console.log("✔ CSS minification disabled");
