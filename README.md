# Lucky Farm Town

Lucky Farm Town is a fully documented browser-based game prototype built as a modern web app dashboard. The prototype blends farming, fishing, and slot-machine loops into a lightweight board interface made from Tailwind-styled tiles with layered 2D objects.

## Project overview

This prototype focuses on the **foundation** for a scalable web game rather than a full game implementation. It demonstrates:

- A responsive dashboard shell with header, navigation, board, and game intelligence panels.
- A tile-based board where each base/platform is rendered as UI, not as a 3D scene.
- Layered 2D objects such as a house, crops, tree, fishing spot, and slot machine.
- Local mock state to simulate selection, action buttons, and evolving tile status.
- A clean folder architecture ready for future state managers, APIs, backend integration, and live systems.

## Stack used

- **Next.js App Router** for page composition and scalable routing.
- **TypeScript** for strong typing and maintainable contracts.
- **Tailwind CSS** for rapid, consistent, design-system-friendly styling.
- **React components** for modular UI composition.
- **Local mock data/state** for prototype interactions without backend dependencies.

## Why Tailwind is used for the tile/platform UI

Tailwind CSS is ideal for this prototype because the tile/base/platform visuals behave like application UI instead of game-engine geometry.

Benefits in this project:

- Fast iteration on color, shadows, spacing, and responsive layout.
- Predictable utility composition for tile states like hover, selected, empty, and occupied.
- Easy reuse of panel, card, badge, and button patterns across the app shell and board.
- Minimal custom CSS, limited to a small pseudo-depth enhancement in `styles/tile-effects.css`.

This keeps the board feeling like a polished casual game dashboard rather than a canvas/WebGL prototype.

## How 2D objects are layered on top

Each tile has two visual layers:

1. **Base layer**: the tile foundation/platform created mostly with Tailwind classes.
2. **Object layer**: an absolutely positioned wrapper that renders a 2D SVG object above the platform surface.

Layering strategy:

- The tile container stays `relative`.
- The object wrapper is positioned within the tile content area.
- A soft ellipse shadow is drawn underneath the object to visually anchor it to the tile.
- The object slightly animates on hover to reinforce depth without needing 3D rendering.

See also:

- `components/game/Tile.tsx`
- `components/game/TileObject.tsx`
- `styles/tile-effects.css`
- `docs/tile-system.md`

## Folder structure explanation

```text
app/
  game/page.tsx              # Main prototype page and local state wiring
  globals.css                # Global styles + Tailwind import
  layout.tsx                 # App metadata and root layout
components/
  game/                      # Board, tile, object, resource, and action UI
  layout/                    # Header, sidebar, and right analytics panel
  ui/                        # Reusable UI primitives (Card, Badge, Button)
features/
  board/                     # Board-specific types, constants, mock data, and helpers
  resources/                 # Resource mock data and type contracts
  tiles/                     # Tile action/state types and helpers
lib/
  cn.ts                      # Utility for class composition
  helpers.ts                 # Shared generic helpers
styles/
  tile-effects.css           # Minimal custom CSS for fake platform depth
public/mock-assets/          # SVG assets used as 2D layered tile objects
docs/
  architecture.md            # System overview and responsibilities
  tile-system.md             # Tile rendering and state architecture
  extension-guide.md         # How to extend the prototype later
types/
  global.types.ts            # Cross-feature shared interfaces
```

## How to run the project

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/game`.

Optional checks:

```bash
npm run typecheck
npm run build
```

## How the tile system works

- The board is a typed array of `BoardTile` items stored in `features/board/board.mock.ts`.
- Each tile defines metadata such as `kind`, `name`, `level`, `mood`, `timerLabel`, and an optional `object`.
- `GameBoard` maps the board data into presentational `Tile` components.
- `Tile` renders the platform appearance and delegates object rendering to `TileObject`.
- `ActionPanel` reads the currently selected tile and resolves valid actions through `board.constants.ts` and `board.utils.ts`.
- The page keeps only enough state to track the selected tile and apply mock tile mutations when an action button is pressed.

## How to add new tile types

1. Add the new `TileKind` in `features/tiles/tile.types.ts`.
2. Add matching actions in `features/board/board.constants.ts`.
3. Extend `board.mock.ts` with one or more tiles using the new kind.
4. If needed, add any new display-specific logic to `Tile.tsx` or `TileObject.tsx`.
5. Document the new gameplay loop in `docs/extension-guide.md`.

## How to add new objects

1. Create a new asset in `public/mock-assets/`.
2. Reference it inside the tile `object` payload in `board.mock.ts`.
3. Optionally add a custom `className` for scale/position tweaks.
4. If the object needs unique interaction rules, expand the action map and tile metadata.

## Documentation map

- `docs/architecture.md` explains the scalable structure and file responsibilities.
- `docs/tile-system.md` explains tile states, layering, and styling strategy.
- `docs/extension-guide.md` explains how to add loops, systems, and future features.

## Future roadmap suggestions

- Add drag-and-drop building placement and construction timers.
- Introduce Zustand or Redux Toolkit for larger state orchestration.
- Add backend APIs for progression, missions, and reward claims.
- Add character workers, inventory, crafting, and event systems.
- Expand the board into larger unlockable regions.
- Add animation polish, audio cues, and feedback loops for actions.
- Add persistence, auth, multiplayer co-op systems, and seasonal events.
