import { TILE_ACTIONS } from './board.constants';
import type { BoardTile } from './board.types';

export function getSelectedTile(tiles: BoardTile[], selectedTileId: string | null) {
  if (!selectedTileId) return null;
  return tiles.find((tile) => tile.id === selectedTileId) ?? null;
}

export function getDefaultSelectedTile(tiles: BoardTile[]) {
  return tiles[0] ?? null;
}

export function getTileActions(tile: BoardTile) {
  return TILE_ACTIONS[tile.kind];
}
