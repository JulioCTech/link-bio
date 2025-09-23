import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useState, type FormEvent } from "react";

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        console.log({
            email: email,
            password: password
        })
    }
    return (

        <div className="flex flex-col w-full h-screen items-center justify-center">
            <Link to="/">
                <h1 className="mt-11 text-white mb-7 font-bold text-5xl">Link
                    <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Bio</span>
                </h1>
            </Link>

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-xl flex flex-col px-4">
                <Input
                    placeholder="Digite seu email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <Input
                    placeholder="Digite sua senha"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    type="submit"
                    className="h-9 bg-blue-600 rounded-lg border-0 text-lg text-white font-medium">
                    Acessar
                </button>
            </form>

        </div>
    )
}
