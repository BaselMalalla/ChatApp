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
                    className="w-4 h-4 border border-secondary-300 rounded bg-secondary-50 focus:ring-3 focus:ring-primary-300 dark:bg-secondary-700 dark:border-secondary-600 dark:focus:ring-primary-600 dark:ring-offset-secondary-800"
                    required={required}  // Use the required prop
                />
            </div>
            <div className="ml-3 text-sm">
                <label htmlFor={id} className="text-secondary-500 dark:text-secondary-300">
                    {label}
                </label>
            </div>
        </div>
    );
};

export default Checkbox;
