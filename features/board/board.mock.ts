import type { BoardTile } from './board.types';
import type { Mission, ProductionStat, RewardEntry } from '@/types/global.types';

/**
 * Mock data is isolated from UI so production APIs/state managers can replace it later.
 */
export const initialBoardTiles: BoardTile[] = [
  {
    id: 'tile-1',
    index: 1,
    name: 'Casa Central',
    description: 'Main farmhouse hub for upgrades, storage, and passive rewards.',
    kind: 'house',
    level: 3,
    mood: 'Residents active',
    timerLabel: 'Collect in 12m',
    yieldReady: true,
    object: { asset: '/mock-assets/house.svg', label: 'Small House', className: 'scale-105' },
  },
  {
    id: 'tile-2',
    index: 2,
    name: 'Huerto Norte',
    description: 'Fast-growing crop patch that feeds the farm loop.',
    kind: 'crop',
    level: 2,
    mood: 'Needs water',
    timerLabel: 'Harvest in 5m',
    yieldReady: true,
    object: { asset: '/mock-assets/crops.svg', label: 'Crops', className: 'scale-95' },
  },
  {
    id: 'tile-3',
    index: 3,
    name: 'Huerto Sur',
    description: 'Secondary crop tile for parallel farming tasks.',
    kind: 'crop',
    level: 1,
    mood: 'Healthy',
    timerLabel: 'Harvest in 14m',
    yieldReady: false,
    object: { asset: '/mock-assets/crops.svg', label: 'Crops', className: 'scale-90' },
  },
  {
    id: 'tile-4',
    index: 4,
    name: 'Árbol de premios',
    description: 'A decorative fruit tree that can later host timed drops.',
    kind: 'tree',
    level: 1,
    mood: 'Blooming',
    timerLabel: 'Fruit in 22m',
    yieldReady: false,
    object: { asset: '/mock-assets/tree.svg', label: 'Tree', className: 'scale-100' },
  },
  {
    id: 'tile-5',
    index: 5,
    name: 'Muelle corto',
    description: 'Fishing spot prototype connected to the town economy.',
    kind: 'fishing',
    level: 2,
    mood: 'Fish nearby',
    timerLabel: 'Best catch now',
    yieldReady: true,
    object: { asset: '/mock-assets/fishing.svg', label: 'Fishing Spot', className: 'scale-110' },
  },
  {
    id: 'tile-6',
    index: 6,
    name: 'Lucky Slot',
    description: 'Mini-game node used to demonstrate casino-style reward loops.',
    kind: 'slot',
    level: 4,
    mood: 'Bonus chance x2',
    timerLabel: 'Spin ready',
    yieldReady: true,
    object: { asset: '/mock-assets/slot.svg', label: 'Slot Machine', className: 'scale-105' },
  },
  {
    id: 'tile-7',
    index: 7,
    name: 'Terreno Este',
    description: 'Reserved land for future farm or factory placement.',
    kind: 'empty',
    level: 0,
    mood: 'Awaiting build',
    timerLabel: 'Available now',
    yieldReady: false,
    object: null,
  },
  {
    id: 'tile-8',
    index: 8,
    name: 'Terreno Oeste',
    description: 'Empty tile ready for future extension systems.',
    kind: 'empty',
    level: 0,
    mood: 'Awaiting build',
    timerLabel: 'Available now',
    yieldReady: false,
    object: null,
  },
  {
    id: 'tile-9',
    index: 9,
    name: 'Terreno premium',
    description: 'Reserved for VIP/premium loops, events, or machines.',
    kind: 'empty',
    level: 0,
    mood: 'Awaiting build',
    timerLabel: 'Unlock later',
    yieldReady: false,
    object: null,
  },
];

export const productionStats: ProductionStat[] = [
  { label: 'Coins', value: '+3,200 / h', progress: 72 },
  { label: 'Food', value: '+480 / h', progress: 58 },
  { label: 'Spin energy', value: '+12 / h', progress: 41 },
];

export const missions: Mission[] = [
  { title: 'Riega 2 cultivos', description: 'Touch the crop loop and speed up harvest readiness.', reward: '+80 coins' },
  { title: 'Haz 1 pesca', description: 'Test the fishing tile action and earn bonus bait.', reward: '+1 ticket' },
  { title: 'Activa el slot', description: 'Trigger the slot machine tile for a premium reward example.', reward: '+12 gems' },
];

export const rewardPool: RewardEntry[] = [
  { label: 'Harvest combo', amount: '5x Wheat' },
  { label: 'Fishing chest', amount: '120 Coins' },
  { label: 'Slot jackpot', amount: '25 Gems' },
];

export const recentEarnings: RewardEntry[] = [
  { label: 'Casa Central', amount: '+240 Coins' },
  { label: 'Huerto Norte', amount: '+16 Food' },
  { label: 'Lucky Slot', amount: '+3 Tickets' },
];
