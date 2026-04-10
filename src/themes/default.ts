import type { Theme } from './types';

export default {
  name: 'Default',
  swatches: ['rgb(11, 90, 158)', 'rgb(216, 95, 79)'],
  colors: {
    '--color-text': 'rgb(33, 32, 40)',
    '--color-text-secondary': 'rgb(120, 120, 130)',
    '--color-text-muted': 'rgb(66, 66, 66)',
    '--color-text-muted-hover': 'rgb(88, 88, 88)',
    '--color-bg': 'rgb(248, 248, 252)',
    '--color-bg-surface': 'white',
    '--color-primary': 'rgb(11, 90, 158)',
    '--color-primary-hover': 'rgb(31, 110, 178)',
    '--color-secondary': 'rgb(216, 95, 79)',
    '--color-secondary-hover': 'rgb(233, 132, 119)',
    '--color-secondary-border': 'rgb(168, 45, 28)',
    '--color-accent': 'rgba(53, 180, 222, 0.8)',
    '--color-border': 'rgba(15, 15, 15, 0.4)',
    '--color-code-bg': 'rgb(235, 235, 240)',
    '--color-code-text': '#2d2d2d',
    '--shadow-button': '0 2px 3px rgba(0,0,0,0.16), 0 2px 3px rgba(0,0,0,0.23)',
  },
  pageContent: {
    notFoundPage: {
      heading: 'This content is not available in your country.',
      message: 'Just kidding. This page does not exist.',
    },
  },
} satisfies Theme;
