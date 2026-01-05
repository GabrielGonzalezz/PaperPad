
import React, { useState, useEffect, useCallback } from 'react';
import { Notepad } from './components/Notepad';
import { Toolbar } from './components/Toolbar';
import { Theme } from './types';
import { THEMES } from './constants';

const App: React.FC = () => {
  const [note, setNote] = useState<string>('');
  const [theme, setTheme] = useState<Theme>(THEMES[0]);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const savedNote = localStorage.getItem('paperpad-note');
      if (savedNote) {
        setNote(JSON.parse(savedNote));
      }

      const savedThemeId = localStorage.getItem('paperpad-theme');
      if (savedThemeId) {
        const savedTheme = THEMES.find(t => t.id === savedThemeId) || THEMES[0];
        setTheme(savedTheme);
      }
    } catch (e) {
      console.error("Failed to load from local storage", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('paperpad-note', JSON.stringify(note));
    } catch (e) {
      console.error("Failed to save note to local storage", e);
    }
  }, [note]);

  useEffect(() => {
    try {
      localStorage.setItem('paperpad-theme', theme.id);
    } catch (e) {
      console.error("Failed to save theme to local storage", e);
    }
  }, [theme]);

  const handleSave = useCallback(() => {
    // Note is already auto-saved via useEffect. This is for user feedback.
    setSaveMessage('Saved!');
    setTimeout(() => {
      setSaveMessage(null);
    }, 2000);
  }, []);

  const themeClasses = `${theme.background} ${theme.font} ${theme.text}`;

  return (
    <main className={`relative w-full min-h-screen transition-colors duration-300 ${themeClasses}`}>
      <Notepad 
        value={note} 
        onChange={(e) => setNote(e.target.value)} 
        theme={theme} 
      />
      <Toolbar 
        themes={THEMES}
        activeTheme={theme}
        onThemeChange={setTheme}
        onSave={handleSave}
        saveMessage={saveMessage}
      />
    </main>
  );
};

export default App;
