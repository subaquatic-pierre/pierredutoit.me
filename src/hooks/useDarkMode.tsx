import { ThemeToggleContext } from 'layout/Layout';
import React, { useState, useEffect, useContext } from 'react';

export type ThemeMode = 'light' | 'dark';

export interface ToggleThemeContactReturn {
  themeMode: ThemeMode;
  themeToggler: () => void;
}

const useDarkMode = (): ToggleThemeContactReturn => {
  return useContext(ThemeToggleContext);
};

export default useDarkMode;
