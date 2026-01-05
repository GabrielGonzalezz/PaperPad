
import React, { useState } from 'react';
import { Theme } from '../types';
import { PaletteIcon } from './Icons';

interface ThemeSwitcherProps {
  themes: Theme[];
  activeTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ themes, activeTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectTheme = (theme: Theme) => {
    onThemeChange(theme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg ${activeTheme.secondary} ${activeTheme.text} hover:opacity-90 focus:ring-current`}
        aria-label="Change Theme"
      >
        <PaletteIcon />
      </button>
      <div
        className={`absolute bottom-full mb-3 right-0 flex flex-col items-end gap-2 p-2 rounded-xl shadow-xl transition-all duration-300 ${activeTheme.secondary} ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => selectTheme(theme)}
            className={`w-8 h-8 rounded-full transition-transform duration-200 hover:scale-110 focus:outline-none ring-2 ${
              activeTheme.id === theme.id ? 'ring-offset-2 ring-offset-current ring-current' : 'ring-transparent'
            } ${theme.background} border-2 border-gray-400/20`}
            aria-label={`Select ${theme.name} theme`}
          />
        ))}
      </div>
    </div>
  );
};
