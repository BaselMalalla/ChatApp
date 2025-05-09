// Check if user's OS prefers dark mode
export const isDarkMode = (): boolean => {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
};

// Type for the callback function
type DarkModeCallback = (isDark: boolean) => void;

// Listen for changes (returns cleanup function)
export const watchDarkMode = (callback: DarkModeCallback): (() => void) => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handler = (event: MediaQueryListEvent) => callback(event.matches);
    mediaQuery.addEventListener('change', handler);

    // Initial call
    callback(mediaQuery.matches);

    // Return cleanup function
    return () => mediaQuery.removeEventListener('change', handler);
};