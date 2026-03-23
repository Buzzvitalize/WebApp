export type TileKind = 'empty' | 'house' | 'crop' | 'tree' | 'fishing' | 'slot';

export type TileAction = {
  id: string;
  label: string;
  variant: 'primary' | 'secondary' | 'accent';
};
