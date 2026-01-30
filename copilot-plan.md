# Copilot Plan — Sanktaj Libroj

This document defines an incremental improvement plan for **Sanktaj Libroj**, designed to be executed with **GitHub Copilot** while preserving the existing architecture and content model.

## Non-Negotiable Guardrails

- ✅ Keep **Open Props** for design tokens and CSS variables
- ✅ Keep **Bedrock Layout Primitives** for layout
- ❌ Do NOT introduce Tailwind or other CSS frameworks
- ❌ Do NOT change the existing JSON chapter schema
- ✅ Prefer **Next.js App Router server components**
- ✅ Optimize for **reading experience**, accessibility, and performance

---

## PR 1 — Project Baseline & Hygiene

**Goal:** Make the repo easier and safer to work in.

### Tasks

- [x] Replace boilerplate README with project-specific documentation
- [x] Document content organization at a high level (no schema changes)
- [x] Confirm ESLint + Prettier alignment
- [x] Add GitHub Actions CI:
  - [x] Install dependencies
  - [x] Lint
  - [x] Typecheck
  - [x] Build

### Acceptance Criteria

- CI passes on PRs
- README reflects the actual project purpose and structure

---

## PR 2 — AppShell Layout (Bedrock-First)

**Goal:** Establish a consistent layout and navigation foundation.

### Tasks

- [x] Create `AppShell` component using Bedrock primitives
  - [x] Header (title, primary nav, search entry point)
  - [x] Sidebar (collections / testaments)
  - [x] Main content region
  - [x] Footer (credits / about link)
- [x] Ensure responsive behavior for sidebar
- [x] Add "Skip to content" link
- [x] Ensure semantic landmarks (`header`, `nav`, `main`, `footer`)

### Acceptance Criteria

- All pages render within `AppShell`
- Keyboard navigation works end-to-end

---

## PR 3 — Reading Experience & Typography (Open Props)

**Goal:** Make chapters comfortable to read for long sessions.

### Tasks

- [x] Define typography baseline using Open Props:
  - [x] Font sizes
  - [x] Line heights
  - [x] Spacing rhythm
- [x] Create `ReadingLayout` wrapper:
  - [x] Constrained measure (65–80ch)
  - [x] Improved paragraph spacing
- [x] Improve chapter structure:
  - [x] Chapter heading hierarchy
  - [x] Verse numbering styling
  - [x] Section/pericope support if present

### Acceptance Criteria

- Chapter pages feel intentionally designed
- No long-line fatigue or cramped spacing

---

## PR 4 — In-Text Navigation (Breadcrumbs + Prev/Next)

**Goal:** Help users understand location and move sequentially.

### Tasks

- [ ] Breadcrumb component:
  - [ ] Collection → Book → Chapter
- [ ] Previous / Next chapter navigation
- [ ] “Back to book” and “Back to collection” links
- [ ] Canonical, predictable routes

### Acceptance Criteria

- Users can traverse chapters linearly
- Breadcrumbs always reflect current route

---

## PR 5 — Search (Minimal, Expandable)

**Goal:** Allow users to find verses quickly.

### Tasks

- [ ] Header search entry point
- [ ] Search results page or overlay
- [ ] Search scopes:
  - [ ] Current book
  - [ ] Current collection
  - [ ] Global
- [ ] Case-insensitive matching
- [ ] Esperanto diacritic normalization (ĉ → c, etc.)

### Acceptance Criteria

- Accurate verse-level results
- Search logic isolated to client components only

---

## PR 6 — Reading Continuity & Tools

**Goal:** Improve return visits and navigation efficiency.

### Tasks

- [ ] “Continue reading”:
  - [ ] Persist last chapter in localStorage
  - [ ] Surface on homepage and/or header
- [ ] Verse anchors for deep linking
- [ ] Jump-to-verse control
- [ ] Optional reading settings:
  - [ ] Font size
  - [ ] Line height
  - [ ] Theme (light/dark)

### Acceptance Criteria

- Returning users resume in one click
- Verse links are shareable and stable

---

## PR 7 — Accessibility Pass

**Goal:** Ensure keyboard, screen reader, and contrast support.

### Tasks

- [ ] Validate heading hierarchy
- [ ] Confirm visible focus styles
- [ ] Add ARIA labels only where necessary
- [ ] Ensure color contrast compliance
- [ ] Add lightweight a11y linting or checks

### Acceptance Criteria

- Fully usable via keyboard
- Logical landmarks and headings for screen readers

---

## PR 8 — Performance & Build Output

**Goal:** Keep pages fast as content grows.

### Tasks

- [ ] Ensure chapters are statically generated where possible
- [ ] Avoid shipping raw JSON to the client unnecessarily
- [ ] Prefetch next/previous chapter routes
- [ ] Optimize images and assets where applicable

### Acceptance Criteria

- Minimal JS on reading pages
- Improved Lighthouse performance scores

---

## PR 9 — Homepage & Library UX Polish

**Goal:** Make the project welcoming and self-explanatory.

### Tasks

- [ ] Redesign homepage:
  - [ ] Project description
  - [ ] Clear entry points to collections
  - [ ] Continue reading section
- [ ] Improve About / Credits discoverability
- [ ] Apply consistent spacing and iconography

### Acceptance Criteria

- New users immediately understand the site
- Returning users jump back into reading quickly

---

## Copilot Working Agreement (Paste into Copilot Chat)

- “Use Open Props and Bedrock Layout primitives only.”
- “Do not modify JSON content schema.”
- “Prefer server components; isolate interactivity.”
- “Optimize for reading experience, accessibility, and performance.”
- “Keep components small and composable.”

---

## Recommended PR Order

1. Baseline & CI
2. AppShell layout
3. Reading typography
4. In-text navigation
5. Search
6. Reading continuity tools
7. Accessibility pass
8. Performance optimization
9. Homepage polish

---

_Last updated: 2026-01-30_
