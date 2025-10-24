# Studio Freight - Frontend Developer Take-Home Assignment

**Author:** Christabel Quaye  
**Role:** Frontend Developer  
**Client:** Studio Freight  

---

## Overview

This project is a **Vue 3 (Vite)** implementation of the Studio Freight contact form section, built for the Frontend Developer take-home assignment. The focus is on **pixel-perfect styling**, **smooth yet performant animations**, and **clean, maintainable component architecture**.

CSS transitions are used wherever possible, with **GSAP** reserved for more advanced sequencing or timeline effects.

---

## Tech Stack

| Purpose | Tool / Library |
|----------|----------------|
| Framework | [Vue 3 (Composition API)](https://vuejs.org) |
| Build Tool | [Vite](https://vitejs.dev) |
| Styling | [Tailwind CSS](https://tailwindcss.com) + global CSS variables |
| Animation | [GSAP](https://greensock.com/gsap) *(optional, minimal usage)* |
| Deployment | [Vercel](https://vercel.com) |

---

## Project Structure

```
src/
├─ assets/
│ └─ styles/
│ └─ globals.css
├─ components/
│ ├─ ContactForm.vue
│ ├─ AnimatedToggleButton.vue
│ ├─ InputField.vue
│ └─ IconSend.vue
├─ App.vue
└─ main.js
```

---

## Installation & Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/studio-freight-takehome.git
cd studio-freight-takehome
npm install
npm run dev
npm run build
npm run preview
```

---

## Live Demo
- Deployed Site: https://your-live-demo-link.vercel.app
- Repository: https://github.com/<your-username>/studio-freight-takehome

---

## Features
1. Responsive, accessible Contact Form
2. Animated toggle button to show/hide the form
3. CSS-based transitions for smooth performance
4. GSAP used optionally for sequential field animations
5. Keyboard accessible (focus traps, labeled inputs, aria attributes)
6. Pixel-perfect spacing, typography, and colors following the Studio Freight aesthetic

---

## Implementation Notes
- Animation
The toggle button controls a reactive boolean `isOpen`.
A `<transition>` component manages entry/exit animations using CSS transitions.
GSAP is used for staggered field fades when the form appears.

- Accessibility
Each field is labeled via `for` + `id`.
The toggle button uses `aria-expanded` to announce state changes.
Reduced motion is respected via `@media (prefers-reduced-motion)`.

- Styling
Tailwind CSS utilities ensure consistent spacing and responsive scaling.
Global variables in `globals.css` handle typography and color palette.

---

## Notes for Reviewers
- The UI matches the provided Studio Freight contact form design as closely as possible.
- The animation timing and easing values have been tuned for natural motion.
- Code is modular and easily extendable for real-world production use.
- All styles and logic are scoped at the component level; global CSS is minimal.

---

## Feature Improvement
- Add form validation and error messaging with Vue UseForm or Vuelidate.
- Integrate backend form submission API.
- Add unit tests with Vitest and Vue Testing Library.
- Improve accessibility with focus management when form toggles open/closed.

---

## Contact
If you need access or encounter issues reviewing the project:
- Email: [Chrissy](qchristabel5@gmail.com)
- WhatsApp: [Chrissy](+233548177587)
