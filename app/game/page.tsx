'use client';

import { useMemo, useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { RightPanel } from '@/components/layout/RightPanel';
import { ActionPanel } from '@/components/game/ActionPanel';
import { GameBoard } from '@/components/game/GameBoard';
import { ResourceBar } from '@/components/game/ResourceBar';
import { getDefaultSelectedTile, getSelectedTile } from '@/features/board/board.utils';
import { initialBoardTiles, missions, productionStats, recentEarnings, rewardPool } from '@/features/board/board.mock';
import { resourcesMock } from '@/features/resources/resource.mock';
import type { BoardTile } from '@/features/board/board.types';

/**
 * The page keeps only the orchestration/state wiring.
 * Board rendering and tile behavior stay inside feature and component layers.
 */
export default function GamePage() {
  const [tiles, setTiles] = useState<BoardTile[]>(initialBoardTiles);
  const [selectedTileId, setSelectedTileId] = useState<string>(getDefaultSelectedTile(initialBoardTiles)?.id ?? null);

  const selectedTile = useMemo(() => getSelectedTile(tiles, selectedTileId), [tiles, selectedTileId]);

  const handleTileAction = (actionId: string) => {
    setTiles((currentTiles) =>
      currentTiles.map((tile) => {
        if (tile.id !== selectedTileId || !tile.object) return tile;

        if (actionId === 'collect' || actionId === 'harvest') {
          return { ...tile, yieldReady: false, timerLabel: 'Recharging' };
        }

        if (actionId === 'water') {
          return { ...tile, mood: 'Hydrated', timerLabel: 'Growing faster' };
        }

        if (actionId === 'upgrade') {
          return { ...tile, level: tile.level + 1, mood: 'Upgraded' };
        }

        if (actionId === 'fish') {
          return { ...tile, mood: 'Lucky cast', timerLabel: 'Fish schooling' };
        }

        if (actionId === 'play') {
          return { ...tile, mood: 'Jackpot spin', timerLabel: 'Bonus streak' };
        }

        return tile;
      }),
    );
  };

  return (
    <main className="min-h-screen bg-transparent text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col px-4 py-4 sm:px-6 lg:px-8">
        <Header />
        <ResourceBar resources={resourcesMock} />
        <div className="mt-4 grid flex-1 gap-4 xl:grid-cols-[240px_minmax(0,1fr)_320px]">
          <Sidebar />
          <section className="flex min-h-[720px] flex-col gap-4">
            <GameBoard tiles={tiles} selectedTileId={selectedTileId} onSelectTile={setSelectedTileId} />
            <ActionPanel selectedTile={selectedTile} onAction={handleTileAction} />
          </section>
          <RightPanel
            productionStats={productionStats}
            missions={missions}
            rewardPool={rewardPool}
            recentEarnings={recentEarnings}
          />
        </div>
      </div>
    </main>
  );
}
