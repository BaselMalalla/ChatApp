// src/pages/auth/Login.tsx

import Checkbox from "../../components/Checkbox";
import InputField from "../../components/InputField";
import Logo from "../../components/Logo";
import SubmitButton from "../../components/SubmitButton";
import TextLink from "../../components/TextLink";

const SignInForm = () => {
    return (
        <section className="bg-secondary-50 dark:bg-secondary-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Logo className="extra-logo-class" />
                <div className="w-full bg-secondary-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-secondary-800 dark:border-secondary-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary-900 md:text-2xl dark:text-primary-100">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <InputField
                                label="Your email"
                                type="email"
                                id="email"
                                placeholder="name@company.com"
                            />
                            <InputField
                                label="Password"
                                type="password"
                                id="password"
                                placeholder="••••••••"
                            />
                            <div className="flex items-center justify-between">
                                <Checkbox id="remember" label="Remember me" className="custom-checkbox-class" />
                                <TextLink
                                    text=""
                                    linkText="Forgot password?"
                                    href="#"
                                    className="text-sm font-medium"
                                    linkClassName="hover:underline text-primary-600 dark:text-primary-500"
                                />
                            </div>
                            <SubmitButton text="Sign in" className="custom-submit-class" />
                        </form>
                        <TextLink
                            text="Don’t have an account yet?"
                            linkText="Sign up"
                            href="/register"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignInForm;
