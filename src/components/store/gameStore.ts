import { create } from 'zustand'

interface GameState {
  isRunning: boolean
  playerPosition: { x: number; y: number }
  currentLevel: number
  setIsRunning: (running: boolean) => void
  setPlayerPosition: (position: { x: number; y: number }) => void
  setCurrentLevel: (level: number) => void
}

export const useGameStore = create<GameState>((set) => ({
  isRunning: false,
  playerPosition: { x: 400, y: 300 },
  currentLevel: 1,
  setIsRunning: (running) => set({ isRunning: running }),
  setPlayerPosition: (position) => set({ playerPosition: position }),
  setCurrentLevel: (level) => set({ currentLevel: level }),
}))