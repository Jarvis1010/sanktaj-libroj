# Sanktaj Libroj — Sacred Texts Library

A modern, accessible digital library of sacred texts, built with [Next.js](https://nextjs.org/) and optimized for comfortable reading. Currently featuring the Bible (Old & New Testament), the Book of Mormon, the Doctrine and Covenants, and the Pearl of Great Price—all in Esperanto.

## About

**Sanktaj Libroj** (Sacred Texts) is a web-based reading platform designed to make religious texts accessible, searchable, and easy to navigate. The project prioritizes:

- **Reading Experience**: Comfortable, distraction-free text layout with careful typography
- **Accessibility**: Full keyboard navigation, screen reader support, semantic markup
- **Performance**: Server-side rendering, static generation, minimal client JavaScript
- **Openness**: No tracking, no ads, open-source codebase

## Project Structure

```
.
├── app/                      # Next.js App Router (pages & layouts)
│   ├── [testamentSlug]/      # Dynamic testament routes (e.g., /novatestimento)
│   │   └── [bookSlug]/       # Dynamic book routes (e.g., /novatestimento/mateo)
│   ├── api/                  # API routes (minimal)
│   ├── about/                # About / Credits page
│   └── page.tsx              # Homepage
├── MalnovaTestimento/        # Old Testament data
├── NovaTestimento/           # New Testament data
├── Mormono/                  # Book of Mormon data
├── MultevaloraPerlo/         # Doctrine & Covenants data
├── Muziko/                   # Hymnal data
└── public/                   # Static assets
```

### Content Format

Each chapter is a JSON file with verse-level structure:

```json
{
  "chapter": 1,
  "book": "Mateo",
  "verses": [
    { "verse": 1, "text": "La genealogxio de Jesuo..." },
    { "verse": 2, "text": "Abraham naskis Izaakon..." }
  ]
}
```

No schema changes are planned; data remains immutable across all UI improvements.

## Getting Started

### Prerequisites

- **Node.js** ≥ 22.x
- **Yarn** (or npm)

### Installation

```bash
git clone https://github.com/Jarvis1010/sanktaj-libroj.git
cd sanktaj-libroj
yarn install
```

### Development

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Pages auto-reload as you edit.

### Scripts

| Command             | Purpose                                |
| ------------------- | -------------------------------------- |
| `yarn dev`          | Start development server               |
| `yarn build`        | Build for production                   |
| `yarn start`        | Run production build                   |
| `yarn lint`         | Run ESLint checks                      |
| `yarn check-types`  | Run TypeScript type checking           |
| `yarn check-format` | Check code formatting (Prettier)       |
| `yarn fix-format`   | Auto-format code (Prettier)            |
| `yarn verify`       | Run lint, typecheck, and format checks |

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14+ (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Layout**: [Bedrock Layout Primitives](https://bedrockbreakthrough.com/)
- **Design Tokens**: [Open Props](https://open-props.style/)
- **Styling**: CSS Modules + CSS Variables (no Tailwind)
- **Linting**: [ESLint](https://eslint.org/) (Next.js config)
- **Formatting**: [Prettier](https://prettier.io/)

## Code Quality

All contributions must pass:

- ✅ **Linting**: `yarn lint`
- ✅ **Type checking**: `yarn check-types`
- ✅ **Formatting**: `yarn check-format`

Run `yarn verify` to check all three at once.

## Design Principles

1. **No framework lock-in for styles**: Use only Open Props and Bedrock. No Tailwind.
2. **Prefer server components**: Minimize client-side JavaScript.
3. **Semantic HTML**: Every page should be a well-structured document.
4. **Keyboard-first**: Design for keyboard navigation; mouse interactions follow.
5. **Progressive enhancement**: Core reading experience works without JavaScript.

## Roadmap

See [copilot-plan.md](./copilot-plan.md) for the incremental improvement plan, organized into 9 focused PRs:

1. **Baseline & Hygiene** — README, CI, linting
2. **AppShell Layout** — Navigation structure
3. **Reading Experience** — Typography & comfort
4. **In-Text Navigation** — Breadcrumbs, prev/next
5. **Search** — Verse-level search with Esperanto diacritics
6. **Reading Continuity** — Bookmarks, resume reading
7. **Accessibility Pass** — WCAG compliance
8. **Performance** — Build optimization, prefetching
9. **Homepage Polish** — UX refinement

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit with clear messages
4. Push to your fork
5. Open a pull request

All PRs must pass CI (linting, type checking, building).

## License

Open source. Check `LICENSE` file for details.

## Credits

- **Sacred Texts**: Various translations (see About page for attribution)
- **Translation to Esperanto**: Community efforts and volunteers
- **Design & Engineering**: See contributors
