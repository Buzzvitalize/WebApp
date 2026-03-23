import { Sparkles, Tractor } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export function Header() {
  return (
    <Card className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-cyan-300 to-violet-400 text-slate-950 shadow-lg shadow-cyan-500/20">
          <Tractor className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-emerald-200/70">Prototype Dashboard</p>
          <h1 className="text-2xl font-black text-white sm:text-3xl">Lucky Farm Town</h1>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Badge className="bg-emerald-500/15 text-emerald-100">Farming loop</Badge>
        <Badge className="bg-cyan-500/15 text-cyan-100">Fishing loop</Badge>
        <Badge className="bg-violet-500/15 text-violet-100">
          <Sparkles className="mr-1 h-3.5 w-3.5" /> Slot rewards
        </Badge>
      </div>
    </Card>
  );
}
