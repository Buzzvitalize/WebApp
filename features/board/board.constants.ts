import type { TileActionMap } from './board.types';

export const BOARD_COLUMNS = 3;
export const BOARD_ROWS = 3;

export const TILE_ACTIONS: TileActionMap = {
  empty: [{ id: 'build', label: 'Build', variant: 'secondary' }],
  house: [
    { id: 'upgrade', label: 'Upgrade', variant: 'primary' },
    { id: 'collect', label: 'Collect', variant: 'secondary' },
  ],
  crop: [
    { id: 'water', label: 'Water', variant: 'primary' },
    { id: 'harvest', label: 'Harvest', variant: 'secondary' },
  ],
  tree: [{ id: 'collect', label: 'Collect Fruit', variant: 'primary' }],
  fishing: [{ id: 'fish', label: 'Fish', variant: 'primary' }],
  slot: [{ id: 'play', label: 'Play', variant: 'accent' }],
};
