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
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {label}
            </label>
            <input
                type={type}
                name={id}
                id={id}
                placeholder={placeholder}
                required
                className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg
                    focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                    ${inputClassName}`}
            />
        </div>
    );
};

export default InputField;
