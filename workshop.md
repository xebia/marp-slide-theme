---
marp: true
theme: xebia
paginate: true
header: Shaping Tomorrow With AI Today
footer: Maurits van der Schee   •   Claude Code Mastery Training
---

<!-- _class: title -->

![background](img/bg-title-light.jpg)

![Maurits van der Schee](img/mevdschee.jpg)

# Creating Xebia slides (theme) for AI + Marp

### Maurits van der Schee

---

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fthumb_back%2Ffh260%2Fbackground%2F20220306%2Fpngtree-question-mark-of-colorful-people-illustration-why-royalty-photo-image_3587541.jpg&f=1&nofb=1&ipt=7d54c994c289f3c4d35a20902704ee56d2ac81567e6885e087a6737181c36737)



# 3 W's: Why, Why, _Why?!_

- No technical knowledge needed
- Prevent ugly deck creation
- Better deck contents with AI

---
<br><br>

| Core Idea                                          | Best For                                             | Strengths                                                                           | Limitations                                                |
| -------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| **Reveal.js** HTML/Markdown presentation *framework*             | Highly customized, interactive slide decks           | Huge plugin ecosystem, deep customization, code highlighting, non‑linear  | Requires HTML/CSS + JS knowledge for advanced use            |
| **Impress.js** CSS3‑powered 3D, zooming, non‑linear | Prezi‑style storytelling                             | Unique 3D transitions, flexible spatial layouts                                     | Steep learning curve, fewer "traditional" slide features |
| **Slidev** Markdown + Vue-powered slides                      | Developer talks, live coding, interactive components | Vue components, Shiki highlighting, animations, recording, presenter mode           | Requires Node/Vite/Vue ecosystem familiarity               |
| **Marp** Markdown → PDF/HTML/PPTX converter                 | Simple, fast, version‑controlled slide creation      | VS Code integration, theme engine, zero setup                                       | Less interactive, fewer advanced animations                |

---

### Exercise 1

- Install VSCode with the Marp extension
- Install Claude Code or Copilot
- Add the recommended .vscode/settings.json
- Ask AI to make a deck
- export to HTML/PDF/PPTX
  
---

### Exercise 2

- Have Git and GitHub access to xebia/marp-slide-theme
- Clone the repo and run `npm install @marp-team/marp-cli`
- Run the debugger: `nodejs marp-debug.js slides.md` (see README)
- Do a PR to change the quote text color
- Think of new slide layouts (see slidev repository)