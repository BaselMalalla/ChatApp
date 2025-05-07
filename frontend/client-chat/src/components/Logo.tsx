// Logo.js
const Logo = ({ className = "" }) => {
    return (
        <a href="#" className={`flex items-center mb-6 text-2xl font-semibold text-blue-600 dark:text-white ${className}`}>
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Flowbite
        </a>
    );
};

export default Logo;
