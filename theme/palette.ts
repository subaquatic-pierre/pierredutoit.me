import { PaletteMode } from '@mui/material';

export const light = {
  alternate: {
    main: '#f7faff',
    dark: '#edf1f7',
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light' as PaletteMode,
  primary: {
    main: '#006d77',
    light: '#b3f9ff',
    dark: '#007580',
    contrastText: '#fff',
  },
  secondary: {
    main: '#83c5be',
    light: '#cbe7e4',
    dark: '#295752',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#1e2022',
    secondary: '#677788',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#ffffff',
    default: '#ffffff',
    level2: '#f5f5f5',
    level1: '#ffffff',
  },
};

export const dark = {
  alternate: {
    main: '#1a2138',
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#006d77',
    light: '#b3f9ff',
    dark: '#007580',
    contrastText: '#fff',
  },
  secondary: {
    main: '#83c5be',
    light: '#cbe7e4',
    dark: '#295752',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#222B45',
    default: '#222B45',
    level2: '#333',
    level1: '#2D3748',
  },
};
