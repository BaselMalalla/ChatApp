import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../../components/Checkbox";
import InputField from "../../components/InputField";
import Logo from "../../components/Logo";
import SubmitButton from "../../components/SubmitButton";
import TextLink from "../../components/TextLink";
import { AuthContext } from "../../features/auth/AuthContext";
import { register } from "../../features/auth/authService";

const RegisterForm = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();
    const { loginUser } = useContext(AuthContext); // Use context-based methods

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (!termsAccepted) {
            setError("You must accept the Terms and Conditions.");
            return;
        }

        try {
            const success = await register(username, name, email, password);
            if (success) {
                try {
                    await loginUser(email, password);
                    navigate("/dashboard");
                } catch (loginError) {
                    console.error(loginError);
                    setError("Login failed after registration.");
                }
            }
        } catch (registerError) {
            console.error(registerError);
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <section className="bg-secondary-50 dark:bg-secondary-900 min-h-screen flex items-center justify-center py-12">

            <div className="bg-secondary-100 rounded-lg shadow dark:border dark:bg-secondary-800 dark:border-secondary-700 mt-20 sm:mt-0">
                <div className="p-6 sm:p-8">
                    <div className="flex flex-col items-center mb-2">
                        <Logo className="mb-2" />
                        <h1 className="text-xl font-bold text-center text-secondary-900 md:text-2xl dark:text-primary-100">
                            Create your account
                        </h1>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <InputField
                                label="Full Name"
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <InputField
                                label="Username"
                                type="text"
                                id="username"
                                placeholder="johndoe123"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <InputField
                                label="Email address"
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
                            <InputField
                                label="Confirm Password"
                                type="password"
                                id="confirm-password"
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <Checkbox
                            id="terms"
                            label="I accept the Terms and Conditions"
                            className=""
                            checked={termsAccepted}
                            onChange={(e) => setTermsAccepted(e.target.checked)}
                        />

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <SubmitButton text="Create an account" className="w-full" />
                    </form>

                    <div className="mt-2 text-center">
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
