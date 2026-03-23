import { Fish, Home, ShoppingBag, Sprout, Trophy, VenetianMask } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/cn';

const navItems = [
  { label: 'Inicio', icon: Home, active: true },
  { label: 'Cultivar', icon: Sprout },
  { label: 'Pesca', icon: Fish },
  { label: 'Ruleta', icon: Trophy },
  { label: 'Slot', icon: VenetianMask },
  { label: 'Tienda', icon: ShoppingBag },
];

export function Sidebar() {
  return (
    <Card className="h-fit">
      <div className="mb-4">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Navegación</p>
        <h2 className="mt-2 text-lg font-bold text-white">Game Modules</h2>
      </div>
      <nav className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
        {navItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={cn(
              'flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors',
              active
                ? 'border-emerald-400/40 bg-emerald-500/12 text-white'
                : 'border-white/8 bg-slate-950/40 text-slate-300 hover:border-cyan-300/25 hover:bg-slate-800/80',
            )}
            type="button"
          >
            <span className="rounded-xl bg-white/8 p-2">
              <Icon className="h-4 w-4" />
            </span>
            <span className="font-medium">{label}</span>
          </button>
        ))}
      </nav>
    </Card>
  );
}
