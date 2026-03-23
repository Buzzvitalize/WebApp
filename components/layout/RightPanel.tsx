import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import type { Mission, ProductionStat, RewardEntry } from '@/types/global.types';

type RightPanelProps = {
  productionStats: ProductionStat[];
  missions: Mission[];
  rewardPool: RewardEntry[];
  recentEarnings: RewardEntry[];
};

export function RightPanel({ productionStats, missions, rewardPool, recentEarnings }: RightPanelProps) {
  return (
    <div className="flex flex-col gap-4">
      <Card>
        <SectionTitle title="Producción por hora" subtitle="Mock analytics snapshot" />
        <div className="mt-4 grid gap-3">
          {productionStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/5 p-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">{stat.label}</span>
                <span className="font-semibold text-white">{stat.value}</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-slate-800">
                <div className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-300" style={{ width: `${stat.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <SectionTitle title="Misiones diarias" subtitle="Short loop objectives" />
        <div className="mt-4 space-y-3">
          {missions.map((mission) => (
            <div key={mission.title} className="rounded-2xl border border-white/8 bg-white/5 p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">{mission.title}</p>
                  <p className="text-sm text-slate-400">{mission.description}</p>
                </div>
                <Badge>{mission.reward}</Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <SectionTitle title="Reward Pool" subtitle="Cross-feature incentive examples" />
        <RewardList entries={rewardPool} />
      </Card>

      <Card>
        <SectionTitle title="Últimas ganancias" subtitle="Recent activity feed" />
        <RewardList entries={recentEarnings} />
      </Card>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-400">{subtitle}</p>
    </div>
  );
}

function RewardList({ entries }: { entries: RewardEntry[] }) {
  return (
    <div className="mt-4 space-y-3">
      {entries.map((entry) => (
        <div key={`${entry.label}-${entry.amount}`} className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2 text-sm">
          <span className="text-slate-300">{entry.label}</span>
          <span className="font-semibold text-white">{entry.amount}</span>
        </div>
      ))}
    </div>
  );
}
