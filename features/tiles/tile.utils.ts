import type { BoardTile } from '@/features/board/board.types';

export function getTileStateLabel(tile: BoardTile, isSelected: boolean) {
  if (isSelected) return 'Selected';
  if (tile.object) return 'Occupied';
  return 'Empty';
}
