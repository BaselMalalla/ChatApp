//  src/pages/auth/Login.tsx

import Checkbox from "../../components/Checkbox";
import InputField from "../../components/InputField";
import Logo from "../../components/Logo";
import SubmitButton from "../../components/SubmitButton";
import TextLink from "../../components/TextLink";

const SignInForm = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Logo className="extra-logo-class" />
                <div className="w-full bg-gray-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <InputField
                                label="Your email"
                                type="email"
                                id="email"
                                placeholder="name@company.com"
                                className="custom-input-class"
                            />
                            <InputField
                                label="Password"
                                type="password"
                                id="password"
                                placeholder="••••••••"
                            />
                            <div className="flex items-center justify-between">
                                <Checkbox id="remember" label="Remember me" className="custom-checkbox-class" />
                                <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                    Forgot password?
                                </a>
                            </div>
                            <SubmitButton text="Sign in" className="custom-submit-class" />
                        </form>
                        <TextLink
                            text="Don’t have an account yet?"
                            linkText="Sign up"
                            href="/signup"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInForm;
