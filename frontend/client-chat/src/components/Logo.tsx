import React from 'react';
import Image from './Image';
import type { LogoProps } from '../interfaces/types';


const Logo: React.FC<LogoProps> = ({ className = "" }) => {
    return (
        <a
            href="#"
            className={`flex items-center mb-6 text-2xl font-serif text-primary-600 dark:text-secondary-300 ${className}`}
        >
            ChiChat
            <Image
                src="chicken-dark.svg"
                darkSrc="chicken-dark.svg" // You might want to change this to a light version if available
                alt="logo"
                className="w-8 h-8 mr-2"
            />
        </a>
    );
};

export default Logo;