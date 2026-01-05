
import React from 'react';
import { Theme } from '../types';
import { ThemeSwitcher } from './ThemeSwitcher';
import { SaveIcon } from './Icons';

interface ToolbarProps {
  themes: Theme[];
  activeTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  onSave: () => void;
  saveMessage: string | null;
}

export const Toolbar: React.FC<ToolbarProps> = ({ themes, activeTheme, onThemeChange, onSave, saveMessage }) => {
  
  const buttonBaseClasses = "p-3 rounded-full flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg";
  const secondaryButtonClasses = `${activeTheme.secondary} ${activeTheme.text} hover:opacity-90 focus:ring-current`;

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-10">
      <div className="flex items-center gap-3">
        {/* FIX: Pass the 'activeTheme' prop instead of the undefined 'theme' variable. */}
        <ThemeSwitcher themes={themes} activeTheme={activeTheme} onThemeChange={onThemeChange} />
        
        <div className="relative flex items-center">
          <button
            onClick={onSave}
            className={`${buttonBaseClasses} ${secondaryButtonClasses}`}
            aria-label="Save Note"
          >
            <SaveIcon />
          </button>
          {saveMessage && (
             <span className={`absolute right-full mr-2 px-3 py-1.5 rounded-full text-sm font-medium shadow-md ${secondaryButtonClasses} transition-opacity duration-300 animate-pulse`}>
              {saveMessage}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};