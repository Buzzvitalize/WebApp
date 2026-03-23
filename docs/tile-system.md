# Tile System Documentation

## Design principle

The tile system is intentionally built as **web UI first**. The platform/base uses Tailwind utilities for shape, color, borders, gradients, spacing, and interaction states. This keeps the prototype lightweight, responsive, and easy to theme.

## Tile states

Each tile supports these conceptual states:

- **empty**: no placed object, ready for future building.
- **hover**: micro-lift animation and object movement hint.
- **selected**: cyan highlight, elevated shadow, visible inspection in the action panel.
- **occupied**: object exists and the tile displays loop-specific details.

## Data model

A tile is represented by the `BoardTile` type:

- `id`: stable identifier
- `index`: board order
- `name`: visible title
- `description`: explanatory text for the action panel
- `kind`: tile gameplay category
- `level`: upgrade level
- `mood`: short current status label
- `timerLabel`: loop timing/status helper
- `yieldReady`: example boolean for collection/harvest readiness
- `object`: optional layered object visual payload

## Visual layering flow

1. `Tile.tsx` creates a rounded platform shell.
2. The platform surface is styled with gradients, borders, glow, and inset overlays.
3. `TileObject.tsx` renders the 2D SVG above the platform using absolute positioning.
4. A blurred ellipse under the object creates grounding and perceived depth.
5. `styles/tile-effects.css` adds subtle fake thickness and front-edge sheen.

## Why not canvas or 3D?

The goal is to create a foundation that feels like a polished SaaS-like game dashboard. HTML + Tailwind + SVG layering gives:

- better accessibility
- easier responsiveness
- simpler iteration
- lower complexity for product-style teams
- a clean path to future game systems without committing to a rendering engine too early

## Extension ideas

- Add build previews and drag state.
- Add locked tile states and unlock animations.
- Add rarity frames around premium objects.
- Add tile decorators such as roads, fences, or ambient FX layers.
