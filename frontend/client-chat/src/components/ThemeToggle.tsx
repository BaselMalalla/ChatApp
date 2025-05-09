import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

export const ThemeToggle: React.FC = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'
                }`}
        >
            {isDarkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};