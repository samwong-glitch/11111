
import { ColorPalette } from './types';

export const COLORS: ColorPalette = {
  primary: '#FFB7C5', // Soft Pink
  secondary: '#FFD700', // Gold
  accent: '#E6BE8A', // Rose Gold / Copper
  background: '#050505',
};

export const TREE_CONFIG = {
  PARTICLE_COUNT: 25000,
  ORNAMENT_COUNT: 60,
  RADIUS: 3.5,
  HEIGHT: 9,
  SPIRAL_LOOPS: 14,
  SCATTER_RADIUS: 12,
  TRANSITION_SPEED: 1.5, // Used for lerping progress
};

export const SNOW_CONFIG = {
  PARTICLE_COUNT: 1500,
  RANGE: 40,
};
