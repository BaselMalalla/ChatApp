// src/pages/auth/Login.tsx

import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import Checkbox from "../../components/Checkbox";
import InputField from "../../components/InputField";
import Logo from "../../components/Logo";
import SubmitButton from "../../components/SubmitButton";
import TextLink from "../../components/TextLink";
import { AuthContext } from "../../features/auth/AuthContext";

const SignInForm = () => {
    const { loginUser, loading, isAuthenticated } = useContext(AuthContext); // Accessing context for loginUser, loading, and authentication status
    const [email, setEmail] = useState(""); // State for email
    const [password, setPassword] = useState(""); // State for password
    const [rememberMe, setRememberMe] = useState(false); // State for rememberMe
    const [error, setError] = useState<string | null>(null); // State for error messages
    const navigate = useNavigate(); // useNavigate hook for redirection

    // Redirect user to another page if already authenticated
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/dashboard"); // Redirect to dashboard (or any other page) if already logged in
        }
    }, [isAuthenticated, navigate]);

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission
        try {
            await loginUser(email, password, rememberMe); // Attempt to log the user in
        } catch (err) {
            console.log(err);
            setError("Login failed. Please check your credentials and try again."); // Set error message if login fails
        }
    };

    return (
        <section className="bg-secondary-50 dark:bg-secondary-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <Logo className="extra-logo-class" />
                <div className="w-full bg-secondary-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-secondary-800 dark:border-secondary-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-secondary-900 md:text-2xl dark:text-primary-100">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <InputField
                                label="Your email"
                                type="email"
                                id="email"
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputField
                                label="Password"
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="flex items-center justify-between">
                                <Checkbox id="remember" label="Remember me" checked={rememberMe} className="" onChange={()=> setRememberMe(!rememberMe)} />
                                <TextLink
                                    text=""
                                    linkText="Forgot password?"
                                    href="#"
                                    className="text-sm font-medium"
                                    linkClassName="hover:underline text-primary-600 dark:text-primary-500"
                                />
                            </div>
                            {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
                            <SubmitButton
                                text={loading ? "Signing in..." : "Sign in"}
                                className="custom-submit-class"
                                disabled={loading} // Disable the button while loading
                            />
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
