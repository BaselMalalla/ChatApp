// src/components/Checkbox.tsx
import type { CheckboxProps } from "../interfaces/types";  // Corrected import path

const Checkbox: React.FC<CheckboxProps> = ({ id, label, className = "", required = false }) => {
    return (
        <div className={`flex items-start ${className}`}>
            <div className="flex items-center h-5">
                <input
                    id={id}
                    aria-describedby={id}
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required={required}  // Use the required prop
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor={id} className="text-gray-500 dark:text-gray-300">
                    {label}
                </label>
            </div>
        </div>
    );
};

export default Checkbox;
