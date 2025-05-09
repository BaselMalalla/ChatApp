import { useEffect, useState } from 'react';
import { isDarkMode, watchDarkMode } from '../utils/darkMode';

export const useDarkMode = (): {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
} => {
    const [isDark, setIsDark] = useState<boolean>(isDarkMode());

    useEffect(() => {
        const unsubscribe = watchDarkMode(setIsDark);
        return unsubscribe;
    }, []);

    // Optional: Persist user preference in localStorage
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleDarkMode = () => {
        setIsDark(prev => !prev);
    };

    return { isDarkMode: isDark, toggleDarkMode };
};