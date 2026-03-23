import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/cn';
import type { BoardTile } from '@/features/board/board.types';
import { getTileStateLabel } from '@/features/tiles/tile.utils';
import { TileObject } from '@/components/game/TileObject';

type TileProps = {
  tile: BoardTile;
  isSelected: boolean;
  onSelect: () => void;
};

export function Tile({ tile, isSelected, onSelect }: TileProps) {
  const isOccupied = Boolean(tile.object);

  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'tile-shell group relative h-full w-full rounded-[38px] border border-transparent bg-transparent p-0 text-left transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300/80',
        isSelected ? 'scale-[1.01]' : 'hover:-translate-y-1 hover:scale-[1.01]',
      )}
      aria-pressed={isSelected}
    >
      <div
        className={cn(
          'tile-base relative flex h-full flex-col justify-between overflow-hidden rounded-[34px] border px-4 pb-4 pt-3',
          isOccupied
            ? 'border-emerald-200/15 bg-gradient-to-b from-emerald-200/40 via-emerald-500/12 to-slate-950/55'
            : 'border-slate-400/12 bg-gradient-to-b from-slate-300/12 via-slate-700/16 to-slate-950/55',
          isSelected && 'border-cyan-300/50 shadow-[0_30px_55px_-26px_rgba(34,211,238,0.7)]',
        )}
      >
        <div className="terrain-canopy absolute inset-x-0 top-0 h-14" />
        <div className="terrain-shelf absolute inset-x-2 bottom-3 h-14 rounded-[26px]" />
        <div className="terrain-seam absolute inset-x-4 bottom-[58px] h-px" />
        <div className="pointer-events-none absolute inset-[10px] rounded-[28px] border border-white/6 opacity-70" />
        <div className="pointer-events-none absolute inset-x-3 bottom-11 top-12 rounded-[24px] bg-[radial-gradient(circle_at_50%_28%,rgba(255,255,255,0.18),transparent_58%)] opacity-80" />

        <div className="relative z-20 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">Tile {tile.index}</p>
            <h3 className="mt-1 text-lg font-bold text-white">{tile.name}</h3>
          </div>
          <Badge className={cn(isOccupied ? 'bg-emerald-500/15 text-emerald-100' : 'bg-slate-500/15 text-slate-200')}>
            {getTileStateLabel(tile, isSelected)}
          </Badge>
        </div>

        <div className="relative z-20 flex flex-1 items-center justify-center px-3 pb-1 pt-5">
          <TileObject tile={tile} />
        </div>

        <div className="relative z-20 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm text-white/90">{tile.object?.label ?? 'Unbuilt land'}</p>
            <p className="text-xs text-slate-200/80">{tile.timerLabel}</p>
          </div>
          <div className="rounded-full border border-white/10 bg-slate-950/55 px-3 py-1 text-xs text-cyan-100">Lv. {tile.level}</div>
        </div>
      </div>
    </button>
  );
}
