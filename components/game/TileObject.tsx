import Image from 'next/image';
import type { BoardTile } from '@/features/board/board.types';
import { cn } from '@/lib/cn';

/**
 * TileObject is the visual layering point:
 * - tile base remains the platform/foundation
 * - object wrapper is absolutely positioned above the base surface
 * - a shadow ellipse grounds the object without requiring a canvas/WebGL scene
 */
export function TileObject({ tile }: { tile: BoardTile }) {
  if (!tile.object) {
    return (
      <div className="flex flex-col items-center gap-2 text-center text-slate-300/80">
        <div className="h-14 w-14 rounded-full border border-dashed border-white/15 bg-white/5" />
        <span className="text-xs uppercase tracking-[0.3em]">Empty</span>
      </div>
    );
  }

  return (
    <div className="relative mt-6 h-[110px] w-full max-w-[160px]">
      <div className="absolute bottom-2 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-slate-950/40 blur-md" />
      <div className={cn('absolute inset-x-0 bottom-3 top-0 transition-transform duration-200 group-hover:-translate-y-1', tile.object.className)}>
        <Image src={tile.object.asset} alt={tile.object.label} fill className="object-contain drop-shadow-[0_12px_10px_rgba(15,23,42,0.35)]" />
      </div>
    </div>
  );
}
