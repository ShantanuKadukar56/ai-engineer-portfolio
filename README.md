# Shantanu Kadukar — AI Engineer Portfolio

A premium, data-driven personal portfolio built with React, TypeScript, Tailwind CSS, and Vite.

## Run it

```bash
npm install
npm run dev
```

## Editing content

Everything on the page (name, headline, about copy, skills, experience, projects,
certifications, contact info, the AI stack diagram) is sourced from one file:

**`src/data/profile.ts`**

That file is fully typed and every field is real content pulled from the LinkedIn
profile and resume — nothing is invented. Two fields are intentionally empty right now:

- `personal.github` — no GitHub URL has been supplied yet. Add one and the GitHub
  section stops showing its empty state automatically.
- `projects` — currently has 2 real entries. Add more and they render automatically;
  if the array were ever empty, the Projects section falls back to a labeled empty
  state instead of fake examples.

## Structure

```
src/
  data/profile.ts       <- single source of truth for all content
  hooks/
    useScrollSpy.ts      <- tracks active nav section on scroll
    useTilt.ts           <- 3D tilt-on-hover effect for cards
  components/
    Navbar, Hero, About, Skills, Experience, Projects,
    AIStack, GitHubSection, Education, Contact, Footer
    ui/                  <- TechBadge, ProjectCard, SectionHeading, EmptyState, Starfield
```

## Notes for iteration

- Section order/visibility: edit `src/App.tsx`.
- Colors, fonts, and the glow/glass/tilt/shine design tokens: `tailwind.config.js`
  and `src/index.css`.
- The AI Engineering Stack diagram (`src/components/AIStack.tsx`) lays itself out
  from `data/profile.ts`'s `aiStack` object — add/remove a branch or child there
  and the SVG diagram recalculates node positions and connector lines automatically.
