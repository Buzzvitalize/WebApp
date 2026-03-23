import type { ResourceStat } from './resource.types';

export const resourcesMock: ResourceStat[] = [
  {
    id: 'coins',
    label: 'Coins',
    value: '24,580',
    panelClassName: 'border-amber-300/20 bg-amber-400/10',
    iconClassName: 'bg-amber-300 text-amber-950',
  },
  {
    id: 'gems',
    label: 'Gems',
    value: '1,230',
    panelClassName: 'border-cyan-300/20 bg-cyan-400/10',
    iconClassName: 'bg-cyan-300 text-cyan-950',
  },
  {
    id: 'tickets',
    label: 'Tickets',
    value: '87',
    panelClassName: 'border-violet-300/20 bg-violet-400/10',
    iconClassName: 'bg-violet-300 text-violet-950',
  },
];
