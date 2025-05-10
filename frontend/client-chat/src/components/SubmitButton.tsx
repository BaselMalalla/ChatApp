import type { SubmitButtonProps } from "../interfaces/types";

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, className = "", disabled = false }) => {
    return (
        <button
            disabled={disabled}
            type="submit"
            aria-disabled={disabled} // Improve accessibility
            className={`w-full text-secondary-100 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-primary-100 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${className}`}
        >
            {text}
        </button>
    );
};

export default SubmitButton;
