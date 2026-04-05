# Xebia Marp Slide Theme

```
// Please put `.vscode/settings.json` on your workspace
{
  "markdown.marp.themes": [
    "https://raw.githubusercontent.com/xebia/marp-slide-theme/refs/heads/main/theme.css"
  ],
  "markdown.marp.breaks": "off"
  "markdown.preview.scrollEditorWithPreview": false
}
```

Install the VSCode extension `marp-team.marp-vscode` for live-preview support
and export options (PDF and/or HTML).

Example `slides.md` file:

```
---
marp: true
theme: xebia
class: invert
paginate: true
header: Shaping Tomorrow With AI Today
footer: Maurits van der Schee   •   Claude Code Mastery Training
---

<!-- _class: title -->

![background](bg-title.jpg)

![Maurits van der Schee](mevdschee.jpg)

# Claude Code Mastery Training

### Maurits van der Schee

---

## The second slide

- point 1
- point 2
- point 3

some text below
```

### Building / Debugging

Install the dependencies using:

    npm install @marp-team/marp-cli

Debug using `marp-debug.js`, execute:

    node marp-debug.js slides.md --theme theme.css --output slides-debug.html

Use your browser developer tools to debug `slides-debug.html` (press F12).
