import React from 'react';

export const Loading: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex flex-col items-center justify-center bg-opacity-50 bg-black">
            <div className="flex space-x-4 mb-4">
                <div className="w-16 h-16 border-t-4 border-primary-600 rounded-full animate-spin"></div>
            </div>
            <p className="text-lg font-semibold animate-pulse text-primary-300">Loading...</p>
        </div>
    );
};
