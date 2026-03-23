import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { BoardTile } from '@/features/board/board.types';
import { getTileActions } from '@/features/board/board.utils';

export function ActionPanel({ selectedTile, onAction }: { selectedTile: BoardTile | null; onAction: (actionId: string) => void }) {
  if (!selectedTile) {
    return (
      <Card>
        <p className="text-slate-300">Select a tile to inspect available actions.</p>
      </Card>
    );
  }

  const actions = getTileActions(selectedTile);

  return (
    <Card className="border-cyan-300/15 bg-slate-900/85">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-cyan-500/15 text-cyan-100">Selected tile</Badge>
            <Badge className="bg-white/8 text-slate-100">{selectedTile.kind}</Badge>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{selectedTile.name}</h3>
            <p className="text-sm text-slate-300">{selectedTile.description}</p>
          </div>
          <div className="grid gap-2 text-sm text-slate-300 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Status</p>
              <p className="mt-1 font-semibold text-white">{selectedTile.mood}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Loop</p>
              <p className="mt-1 font-semibold text-white">{selectedTile.timerLabel}</p>
            </div>
            <div className="rounded-2xl bg-white/5 p-3">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Yield</p>
              <p className="mt-1 font-semibold text-white">{selectedTile.yieldReady ? 'Ready' : 'Preparing'}</p>
            </div>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:min-w-[220px] lg:grid-cols-1">
          {actions.map((action) => (
            <Button key={action.id} variant={action.variant} onClick={() => onAction(action.id)}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
