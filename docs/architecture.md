# Architecture Guide

## Goals

The project structure is designed to keep **UI composition**, **feature logic**, **typed contracts**, and **documentation** separate so the prototype can scale without turning `page.tsx` into a monolith.

## Layer responsibilities

### `app/`
- Owns route entry points and root CSS imports.
- Keeps pages lean and focused on layout composition and state wiring.
- Avoids embedding board mock data or rendering details directly in route files.

### `components/`
- Holds presentational and composable UI pieces.
- `components/ui/` contains reusable primitives.
- `components/layout/` contains shell sections such as the header and side panels.
- `components/game/` contains gameplay-oriented rendering components.

### `features/`
- Stores domain-specific logic and data shape definitions.
- `features/board/` owns board models, action mappings, helpers, and mock board state.
- `features/tiles/` owns tile-centric enums and display helpers.
- `features/resources/` owns resource counters and related typed mock data.

### `lib/`
- Shared lightweight utilities that should stay framework-agnostic where possible.

### `styles/`
- Stores small CSS files only when utility classes are not the best fit.
- In this prototype, it is limited to a pseudo-depth enhancement for the tiles.

### `public/`
- Static mock assets rendered as layered 2D tile objects.

### `docs/`
- Developer-facing project documentation.
- Helps future contributors understand intent, structure, and extension points.

## Component responsibility map

- `Header`: game identity and high-level theme cues.
- `ResourceBar`: resource counters for core currencies.
- `Sidebar`: navigation shell for future modules.
- `GameBoard`: board layout wrapper and explanatory framing.
- `Tile`: tile platform rendering and tile-level state display.
- `TileObject`: 2D object layering renderer.
- `ActionPanel`: selected tile inspector with contextual actions.
- `RightPanel`: analytics, missions, reward pools, and recent earnings.

## Why this scales well

This structure supports future additions without large refactors:

- Replace mock data with APIs while keeping component interfaces stable.
- Introduce state libraries without rewriting presentation components.
- Add more routes such as `/shop`, `/inventory`, or `/events` with the same shell patterns.
- Split large feature domains into nested feature modules as gameplay grows.
