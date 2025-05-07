import React from "react";

export type TextLinkProps = {
    text: string;
    linkText: string;
    href: string;
    className?: string;
    linkClassName?: string;
};

const TextLink: React.FC<TextLinkProps> = ({
    text,
    linkText,
    href,
    className = "",
    linkClassName = "",
}) => {
    return (
        <p className={`text-sm font-light text-gray-500 dark:text-gray-400 ${className}`}>
            {text}{" "}
            <a
                href={href}
                className={`font-medium text-blue-600 hover:underline dark:text-blue-500 ${linkClassName}`}
            >
                {linkText}
            </a>
        </p>
    );
};

export default TextLink;
