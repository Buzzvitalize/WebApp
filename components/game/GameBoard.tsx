'use client';

import { useEffect, useMemo, useRef, useState, type PointerEvent } from 'react';
import { Card } from '@/components/ui/Card';
import type { BoardTile } from '@/features/board/board.types';
import { Tile } from '@/components/game/Tile';
import { cn } from '@/lib/cn';

type GameBoardProps = {
  tiles: BoardTile[];
  selectedTileId: string | null;
  onSelectTile: (tileId: string) => void;
};

type Offset = {
  x: number;
  y: number;
};

const GRID_COLUMNS = 4;
const TILE_WIDTH = 230;
const TILE_HEIGHT = 196;
const TILE_GAP = 24;
const WORLD_PADDING = 28;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function getTilePosition(index: number) {
  const row = Math.floor(index / GRID_COLUMNS);
  const column = index % GRID_COLUMNS;
  const staggerOffset = row % 2 === 0 ? 0 : 88;

  return {
    left: column * (TILE_WIDTH + TILE_GAP) + staggerOffset,
    top: row * (TILE_HEIGHT - 36),
  };
}

export function GameBoard({ tiles, selectedTileId, onSelectTile }: GameBoardProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const dragStateRef = useRef<{ pointerId: number; startX: number; startY: number; originX: number; originY: number } | null>(null);
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [bounds, setBounds] = useState({ minX: 0, maxX: 0, minY: 0, maxY: 0 });

  const world = useMemo(() => {
    const positions = tiles.map((_, index) => getTilePosition(index));
    const rows = Math.max(1, Math.ceil(tiles.length / GRID_COLUMNS));
    const contentWidth = GRID_COLUMNS * TILE_WIDTH + (GRID_COLUMNS - 1) * TILE_GAP + 88;
    const contentHeight = rows * TILE_HEIGHT - Math.max(0, rows - 1) * 36;

    return {
      width: contentWidth + WORLD_PADDING * 2,
      height: contentHeight + WORLD_PADDING * 2,
      positions,
    };
  }, [tiles]);

  useEffect(() => {
    const updateBounds = () => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      const nextBounds = {
        minX: Math.min(0, viewport.clientWidth - world.width),
        maxX: 0,
        minY: Math.min(0, viewport.clientHeight - world.height),
        maxY: 0,
      };

      setBounds(nextBounds);
      setOffset((current) => ({
        x: clamp(current.x, nextBounds.minX, nextBounds.maxX),
        y: clamp(current.y, nextBounds.minY, nextBounds.maxY),
      }));
    };

    updateBounds();
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, [world.height, world.width]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;

    dragStateRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: offset.x,
      originY: offset.y,
    };

    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;
    if (!dragState || dragState.pointerId !== event.pointerId) return;

    const nextX = clamp(dragState.originX + (event.clientX - dragState.startX), bounds.minX, bounds.maxX);
    const nextY = clamp(dragState.originY + (event.clientY - dragState.startY), bounds.minY, bounds.maxY);

    setOffset({ x: nextX, y: nextY });
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    const dragState = dragStateRef.current;
    if (!dragState || dragState.pointerId !== event.pointerId) return;

    dragStateRef.current = null;
    setIsDragging(false);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <Card className="relative flex-1 overflow-hidden border-cyan-300/10 bg-slate-950/70 p-0">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.16),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_28%)]" />
      <div className="relative z-10 flex flex-col gap-3 px-5 pb-3 pt-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Movable town map</p>
          <h2 className="text-2xl font-bold text-white">Drag the terrain to explore</h2>
        </div>
        <p className="max-w-2xl text-sm text-slate-300/80">
          The board now behaves like a mobile-map viewport: drag with mouse or touch, keep structures above the terrain, and inspect any connected zone.
        </p>
      </div>

      <div
        ref={viewportRef}
        className={cn(
          'relative mx-4 mb-4 min-h-[620px] overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,47,73,0.92),rgba(15,23,42,0.85))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
          isDragging ? 'cursor-grabbing' : 'cursor-grab',
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerEnd}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.16),transparent_0%,transparent_18%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,rgba(74,222,128,0.08),transparent_34%),linear-gradient(0deg,rgba(15,118,110,0.18),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/45">
          <span>Viewport</span>
          <span>{tiles.length} zones</span>
        </div>

        <div
          className="absolute left-0 top-0 will-change-transform"
          style={{
            width: world.width,
            height: world.height,
            transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
          }}
        >
          <div className="absolute inset-0 rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(110,231,183,0.12),transparent_26%),linear-gradient(180deg,rgba(22,163,74,0.18),rgba(12,74,110,0.08))]" />
          <div className="absolute inset-[20px] rounded-[34px] border border-emerald-200/10 bg-[linear-gradient(180deg,rgba(74,222,128,0.08),rgba(8,47,73,0.12))]" />

          {tiles.map((tile, index) => {
            const position = world.positions[index];

            return (
              <div
                key={tile.id}
                className="absolute"
                style={{
                  left: position.left + WORLD_PADDING,
                  top: position.top + WORLD_PADDING,
                  width: TILE_WIDTH,
                  height: TILE_HEIGHT,
                }}
              >
                <Tile tile={tile} isSelected={selectedTileId === tile.id} onSelect={() => onSelectTile(tile.id)} />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
