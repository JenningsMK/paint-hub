# ui-library

Vue 3 components for the Paint Hub app, written in TypeScript and built with Vite+.

## Installation

```bash
pnpm add ui-library
```

## Usage

Import the styles once, then use the components:

```ts
import "ui-library/style.css";
import { StageStatus } from "ui-library";
```

```vue
<template>
  <StageStatus status="painting" />
</template>
```

### `StageStatus`

Shows a build stage as a coloured label.

| Prop     | Type                                                         | Default      |
| -------- | ------------------------------------------------------------ | ------------ |
| `status` | `"on-sprue"` \| `"construction"` \| `"painting"` \| `"done"` | `"on-sprue"` |

## Development

Install dependencies from the repository root:

```bash
vp install
```

Run the unit tests from this package:

```bash
vp test
```

Check formatting, linting and types:

```bash
vp check
```

Build the library to `dist/`:

```bash
vp run build
```

### Component stories

Each component has a `*.story.vue` file next to it, shown in [Histoire](https://histoire.dev/):

```bash
vp run story:dev     # start the story explorer
vp run story:build   # build the static site
vp run story:preview # preview the built site
```

### Project layout

- `src/components/<name>/` holds each component, its story, its tests and any constants it needs.
- `src/styles/` holds the reset and the design tokens (CSS custom properties).
- `src/index.ts` is the public entry point. Anything exported from here is part of the package API.
