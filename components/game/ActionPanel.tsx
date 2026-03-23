import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import type { BoardTile } from '@/features/board/board.types';
import { getTileActions } from '@/features/board/board.utils';
import { cn } from '@/lib/cn';

export function ActionPanel({ selectedTile, onAction }: { selectedTile: BoardTile | null; onAction: (actionId: string) => void }) {
  if (!selectedTile) {
    return (
      <Card className="pointer-events-auto w-full max-w-[320px] border-cyan-300/15 bg-slate-950/88 p-4 shadow-2xl shadow-slate-950/40">
        <p className="text-sm text-slate-300">Select a tile to inspect available actions.</p>
      </Card>
    );
  }

  const actions = getTileActions(selectedTile);

  return (
    <Card className="pointer-events-auto w-full max-w-[340px] border-cyan-300/20 bg-slate-950/88 p-4 shadow-[0_30px_60px_-24px_rgba(15,23,42,0.95)] backdrop-blur-2xl">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className="bg-cyan-500/15 text-cyan-100">Selected tile</Badge>
          <Badge className="bg-white/8 text-slate-100">{selectedTile.kind}</Badge>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">{selectedTile.name}</h3>
          <p className="mt-1 text-sm text-slate-300">{selectedTile.description}</p>
        </div>

        <div className="grid gap-2 text-sm text-slate-300">
          <div className="rounded-2xl border border-white/8 bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Status</p>
            <p className="mt-1 font-semibold text-white">{selectedTile.mood}</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Loop</p>
            <p className="mt-1 font-semibold text-white">{selectedTile.timerLabel}</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-white/5 p-3">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Yield</p>
            <p className="mt-1 font-semibold text-white">{selectedTile.yieldReady ? 'Ready' : 'Preparing'}</p>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {actions.map((action) => (
            <Button key={action.id} variant={action.variant} onClick={() => onAction(action.id)} className={cn('w-full justify-center')}>
              {action.label}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
}
