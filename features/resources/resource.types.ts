export type ResourceId = 'coins' | 'gems' | 'tickets';

export type ResourceStat = {
  id: ResourceId;
  label: string;
  value: string;
  panelClassName: string;
  iconClassName: string;
};
