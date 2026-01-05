
import { Theme } from './types';

export const THEMES: Theme[] = [
  {
    id: 'cream',
    name: 'Cream',
    background: 'bg-yellow-50',
    text: 'text-gray-800',
    font: 'font-serif',
    primary: 'bg-stone-700',
    secondary: 'bg-stone-200'
  },
  {
    id: 'handwritten',
    name: 'Handwritten',
    background: 'bg-amber-50',
    text: 'text-stone-800',
    font: 'font-handwriting',
    primary: 'bg-cyan-700',
    secondary: 'bg-cyan-200'
  },
  {
    id: 'graph',
    name: 'Graph Paper',
    background: 'graph-paper',
    text: 'text-gray-900',
    font: 'font-sans',
    primary: 'bg-blue-600',
    secondary: 'bg-blue-200'
  },
  {
    id: 'blueprint',
    name: 'Blueprint',
    background: 'bg-blue-900',
    text: 'text-blue-100',
    font: 'font-mono',
    primary: 'bg-sky-400',
    secondary: 'bg-blue-800'
  },
  {
    id: 'noir',
    name: 'Noir',
    background: 'bg-gray-900',
    text: 'text-gray-100',
    font: 'font-sans',
    primary: 'bg-red-600',
    secondary: 'bg-gray-800'
  },
];