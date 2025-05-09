import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

interface ImageProps {
    src: string;
    darkSrc?: string;
    alt: string;
    className?: string;
    width?: number | string;
    height?: number | string;
}

const Image: React.FC<ImageProps> = ({
    src,
    darkSrc,
    alt,
    className = "",
    width,
    height,
}) => {
    const { isDarkMode } = useDarkMode();
    const imageSrc = isDarkMode && darkSrc ? darkSrc : src;

    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            width={width}
            height={height}
        />
    );
};

export default Image;