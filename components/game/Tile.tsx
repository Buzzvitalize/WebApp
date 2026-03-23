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
        'tile-shell group relative min-h-[170px] rounded-[32px] border border-transparent p-3 text-left transition duration-200 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-300/80',
        isSelected ? 'border-cyan-300/60 bg-cyan-300/8 shadow-[0_20px_45px_-20px_rgba(34,211,238,0.55)]' : 'bg-transparent',
      )}
      aria-pressed={isSelected}
    >
      <div
        className={cn(
          'tile-base relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border px-4 pb-4 pt-3',
          isOccupied
            ? 'border-emerald-200/10 bg-gradient-to-b from-emerald-300/25 via-emerald-500/10 to-slate-900/60'
            : 'border-slate-400/10 bg-gradient-to-b from-slate-300/10 via-slate-700/20 to-slate-950/60',
        )}
      >
        <div className="relative z-20 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/55">Tile {tile.index}</p>
            <h3 className="mt-1 text-lg font-bold text-white">{tile.name}</h3>
          </div>
          <Badge className={cn(isOccupied ? 'bg-emerald-500/15 text-emerald-100' : 'bg-slate-500/15 text-slate-200')}>
            {getTileStateLabel(tile, isSelected)}
          </Badge>
        </div>

        <div className="pointer-events-none absolute inset-x-3 bottom-11 top-12 z-10 rounded-[22px] border border-white/6 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.18),transparent_58%)] opacity-80" />
        <div className="relative z-20 flex flex-1 items-center justify-center">
          <TileObject tile={tile} />
        </div>

        <div className="relative z-20 flex items-end justify-between gap-3">
          <div>
            <p className="text-sm text-white/85">{tile.object?.label ?? 'Unbuilt land'}</p>
            <p className="text-xs text-slate-300">{tile.timerLabel}</p>
          </div>
          <div className="rounded-full bg-slate-950/60 px-3 py-1 text-xs text-cyan-100">Lv. {tile.level}</div>
        </div>
      </div>
    </button>
  );
}
