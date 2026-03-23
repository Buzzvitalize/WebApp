# Extension Guide

## Adding a new gameplay loop

For a new loop such as animals, crafting, or mining:

1. Extend `TileKind` in `features/tiles/tile.types.ts`.
2. Add tile actions in `features/board/board.constants.ts`.
3. Add mock tiles to `features/board/board.mock.ts`.
4. Add any supporting data models under a dedicated `features/<domain>/` folder.
5. Update `ActionPanel` if the loop needs special metrics.
6. Update the README and docs so the system remains discoverable.

## Adding a new board state system

Examples: locked, damaged, boosted, under-construction.

Recommended approach:

- Add explicit fields to `BoardTile` instead of overloading a single string.
- Keep transformation logic in `features/board/board.utils.ts` or a dedicated state module.
- Keep presentational components dumb and driven by typed props.

## Replacing mock state later

Suggested progression:

1. Local component state (current prototype)
2. Shared client state with Zustand / Redux Toolkit / React Query caches
3. Backend API integration
4. Persisted progression and live event systems

## Asset strategy for future growth

- Keep SVG assets for clean UI-like objects.
- Migrate to sprite sheets only when animation density grows.
- Use consistent sizing ratios so objects feel balanced across tile types.

## Suggested next milestones

- Tile placement flow
- Construction timers
- Economy balancing panel
- Inventory and storage
- Character workers
- Event-based reward pool
- Authentication and cloud save
