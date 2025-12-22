export interface Position {
  x: number
  y: number
}

export interface PlayerState {
  position: Position
  direction: 'up' | 'down' | 'left' | 'right'
  isMoving: boolean
}

export interface Level {
  id: number
  name: string
  description: string
  grid: number[][]
  startPosition: Position
  goalPosition: Position
  obstacles: Position[]
}

export type Command = 
  | { type: 'move'; direction: 'up' | 'down' | 'left' | 'right' }
  | { type: 'wait'; duration: number }
  | { type: 'log'; message: string }