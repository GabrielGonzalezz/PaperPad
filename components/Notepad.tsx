
import React from 'react';
import { Theme } from '../types';

interface NotepadProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  theme: Theme;
}

export const Notepad: React.FC<NotepadProps> = ({ value, onChange, theme }) => {
  const textColorClass = theme.text;
  const placeholderColorClass = textColorClass.replace('text-', 'placeholder:text-').replace(/-\d+$/, (match) => `-${parseInt(match.substring(1)) - 300 > 0 ? parseInt(match.substring(1)) - 300 : 100 }/50`);

  return (
    <div className="absolute inset-0">
      <textarea
        value={value}
        onChange={onChange}
        placeholder="Start writing..."
        className={`w-full h-full p-6 md:p-12 lg:p-20 box-border bg-transparent focus:outline-none resize-none text-lg leading-relaxed ${textColorClass} ${placeholderColorClass}`}
        autoFocus
      />
    </div>
  );
};
