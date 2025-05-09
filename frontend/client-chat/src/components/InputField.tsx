import React from "react";
import type { InputFieldProps } from "../interfaces/types";

const InputField: React.FC<InputFieldProps> = ({
    label,
    type = "text",
    id,
    placeholder = "",
    className = "",
    inputClassName = "",
}) => {
    return (
        <div className={className}>
            <label
                htmlFor={id}
                className="block mb-2 text-sm font-medium text-secondary-text dark:text-secondary-text-dark"
            >
                {label}
            </label>
            <input
                autoComplete="on"
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                required
                className={`
                    bg-secondary-bg border border-secondary-border text-secondary-text
                    focus:ring-primary-ring focus:border-primary
                    block w-full p-2.5 rounded-lg
                    dark:bg-secondary-bg-dark dark:border-secondary-border-dark
                    dark:placeholder-secondary-text-dark dark:text-white
                    dark:focus:ring-primary-dark-ring dark:focus:border-primary-hover
                    ${inputClassName}
                `}
            />
        </div>
    );
};

export default InputField;
