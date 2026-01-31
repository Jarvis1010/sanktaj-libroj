# Content Organization

This document describes how sacred texts are organized in Sanktaj Libroj.

## Directory Structure

All content is organized by testament/collection, then by book, then by chapter:

```
{Collection}/
├── index.ts              # Exports list of books with metadata
└── {BookName}/
    ├── index.ts          # Exports book metadata
    └── chapter{N}/
        └── index.ts      # Exports chapter verses
```

### Collections

1. **MalnovaTestimento** — Old Testament (Hebrew Scriptures)

   - 39 books
   - Examples: Genezo (Genesis), Eksodo (Exodus), Psalmaro (Psalms)

2. **NovaTestimento** — New Testament

   - 27 books
   - Examples: Mateo (Matthew), Marko (Mark), Johano (John)

3. **Mormono** — Book of Mormon

   - 15 books
   - Examples: 1 Nifai, Alma, Mormon

4. **MultevaloraPerlo** — Pearl of Great Price

   - Doctrine & Covenants
   - Example: Moseo (Moses)

5. **Muziko** — Hymnal
   - Himnoj (Hymns)

## Data Schema

Each chapter file exports a JSON object with this structure:

```typescript
interface Chapter {
  chapter: number; // Chapter number (e.g., 1, 2, 3)
  book: string; // Book name in Esperanto
  verses: Verse[];
}

interface Verse {
  verse: number; // Verse number (e.g., 1, 2, 3)
  text: string; // Full verse text in Esperanto
}
```

### Example

```json
{
  "chapter": 1,
  "book": "Mateo",
  "verses": [
    {
      "verse": 1,
      "text": "La genealogxio de Jesuo Kristo, filo de David, filo de Abraham..."
    },
    {
      "verse": 2,
      "text": "Abraham naskis Izaakon; kaj Izaako naskis Jakobon..."
    }
  ]
}
```

## Routing

Routes are constructed from collection and book slugs:

```
/{testament}/{book}/{chapter}
```

Examples:

- `/novatestimento/mateo/1` — Matthew, Chapter 1
- `/malnovatestimento/psalmaro/23` — Psalms, Chapter 23
- `/mormono/alma/32` — Book of Alma, Chapter 32

### Slug Rules

- Esperanto characters are normalized to ASCII for URLs:
  - `ĉ` → `cx`
  - `ĝ` → `gx`
  - `ĥ` → `hx`
  - `ĵ` → `jx`
  - `ŝ` → `sx`
  - `ŭ` → `ux`
- Spaces are converted to hyphens
- Names are lowercase

## File Locations

- Collections live in the **root directory** as folders
- Each collection's `index.ts` exports book metadata (list of books with titles)
- Each book's `index.ts` exports chapter count and metadata
- Chapters are in subdirectories like `chapter1/`, `chapter2/`, etc., with `index.ts` files

## No Schema Changes

The content structure is stable and will not be modified during UI improvements. All changes are front-end only.

## Future Additions

Potential enhancements (without schema changes):

- Pericopae (section breaks) — can be inferred from verse breaks or special markers in text
- Footnotes/references — could be stored as optional fields without breaking existing data
- Parallel passages — metadata could be added separately

For now, focus is on reading experience, navigation, and discoverability of the existing structure.
