import { Coins, Gem, Ticket } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/cn';
import type { ResourceStat } from '@/features/resources/resource.types';

const resourceIcons = {
  coins: Coins,
  gems: Gem,
  tickets: Ticket,
};

export function ResourceBar({ resources }: { resources: ResourceStat[] }) {
  return (
    <Card className="mt-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {resources.map((resource) => {
          const Icon = resourceIcons[resource.id];
          return (
            <div key={resource.id} className={cn('rounded-2xl border p-4', resource.panelClassName)}>
              <div className="flex items-center gap-3">
                <div className={cn('rounded-2xl p-3', resource.iconClassName)}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-200/80">{resource.label}</p>
                  <p className="text-2xl font-black text-white">{resource.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
