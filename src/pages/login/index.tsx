import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useState, type FormEvent } from "react";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log({
            email,
            password,
        });
    }

    return (
        <div className="flex flex-col items-center justify-start w-full h-screen pt-[30%] select-none">
            <Link to="/">
                <h1 className="mb-7 mt-11 text-5xl font-bold text-white">
                    Link
                    <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                        Bio
                    </span>
                </h1>
            </Link>

            <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-xl flex-col gap-3 px-4"
            >
                <label className="sr-only" htmlFor="email">
                    Email
                </label>
                <Input
                    id="email"
                    placeholder="Digite seu email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

                <label className="sr-only" htmlFor="password">
                    Senha
                </label>
                <Input
                    id="password"
                    placeholder="********"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />

                <button
                    type="submit"
                    className="h-9 rounded-lg bg-blue-600 text-lg font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Acessar
                </button>
            </form>
        </div>
    );
}
