#!/bin/bash
echo 
echo "==> Installing dependencies..."
echo 
npm install
echo 
echo "==> Building slides... (debug version)"
echo 
node marp-debug.js slides.md --theme theme.css --output slides-debug.html
echo 
echo "==> Building HTML slides"
echo 
./node_modules/.bin/marp slides.md --allow-local-files --theme theme.css --output slides.html
echo 
echo "==> Building PDF slides"
echo 
./node_modules/.bin/marp slides.md --allow-local-files --theme theme.css --output slides.pdf
echo 
echo "==> Done."