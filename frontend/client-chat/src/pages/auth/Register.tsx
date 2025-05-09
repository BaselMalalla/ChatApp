import Checkbox from "../../components/Checkbox";
import InputField from "../../components/InputField";
import Logo from "../../components/Logo";
import SubmitButton from "../../components/SubmitButton";
import TextLink from "../../components/TextLink";

const RegisterForm = () => {
    return (
        <section className="bg-secondary-50 dark:bg-secondary-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Logo className="extra-logo-class" />
                <div className="w-full bg-secondary-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-secondary-800 dark:border-secondary-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary-900 md:text-2xl dark:text-primary-100">
                            Create your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InputField
                                    label="Username"
                                    type="text"
                                    id="username"
                                    placeholder="johndoe123"
                                />
                                <InputField
                                    label="Email address"
                                    type="email"
                                    id="email"
                                    placeholder="name@company.com"
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <InputField
                                    label="Password"
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                />
                                <InputField
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm-password"
                                    placeholder="••••••••"
                                />
                            </div>
                            <div className="flex items-start">
                                <Checkbox
                                    id="terms"
                                    label="I accept the Terms and Conditions"
                                    className="custom-checkbox-class"
                                />
                            </div>
                            <SubmitButton text="Create an account" className="custom-submit-class w-full" />
                        </form>
                        <TextLink
                            text="Already have an account?"
                            linkText="Sign in"
                            href="/login"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterForm;