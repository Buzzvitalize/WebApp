import type { TileAction, TileKind } from '@/features/tiles/tile.types';

export type TileObjectVisual = {
  asset: string;
  label: string;
  className?: string;
};

export type BoardTile = {
  id: string;
  index: number;
  name: string;
  description: string;
  kind: TileKind;
  level: number;
  mood: string;
  timerLabel: string;
  yieldReady: boolean;
  object: TileObjectVisual | null;
};

export type TileActionMap = Record<TileKind, TileAction[]>;
