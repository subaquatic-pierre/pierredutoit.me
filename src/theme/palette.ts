import { PaletteMode } from '@mui/material';

export const light = {
  alternate: {
    main: '#97e7ee',
    dark: '#edf1f7'
  },
  cardShadow: 'rgba(23, 70, 161, .11)',
  mode: 'light' as PaletteMode,
  primary: {
    main: '#006d77',
    light: '#b3f9ff',
    dark: '#007580',
    contrastText: '#fff'
  },
  secondary: {
    main: '#83c5be',
    light: '#cbe7e4',
    dark: '#295752',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  text: {
    primary: '#1e2022',
    secondary: '#677788'
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: '#ffffff',
    default: '#ffffff',
    level2: '#edf1f7',
    level1: '#f7faff'
  }
};

export const dark = {
  alternate: {
    main: '#015a62',
    dark: '#151a30'
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff'
  },
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#006d77',
    light: '#b3f9ff',
    dark: '#007580',
    contrastText: '#fff'
  },
  secondary: {
    main: '#83c5be',
    light: '#cbe7e4',
    dark: '#295752',
    contrastText: 'rgba(0, 0, 0, 0.87)'
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#222B45',
    default: '#222B45',
    level2: '#151a30',
    level1: '#1a2138'
  }
};
