import { Card } from '@/components/ui/Card';
import type { BoardTile } from '@/features/board/board.types';
import { Tile } from '@/components/game/Tile';

type GameBoardProps = {
  tiles: BoardTile[];
  selectedTileId: string | null;
  onSelectTile: (tileId: string) => void;
};

export function GameBoard({ tiles, selectedTileId, onSelectTile }: GameBoardProps) {
  return (
    <Card className="flex-1 overflow-hidden">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Interactive board</p>
          <h2 className="text-2xl font-bold text-white">Town grid prototype</h2>
        </div>
        <p className="max-w-2xl text-sm text-slate-400">
          Tailwind styles build the base platforms, while each 2D object is absolutely layered above the tile surface for a lightweight web app game feel.
        </p>
      </div>
      <div className="grid min-h-[560px] gap-5 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.9),rgba(15,23,42,0.65))] p-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiles.map((tile) => (
          <Tile key={tile.id} tile={tile} isSelected={selectedTileId === tile.id} onSelect={() => onSelectTile(tile.id)} />
        ))}
      </div>
    </Card>
  );
}
