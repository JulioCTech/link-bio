import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { useState, type FormEvent } from "react";

import { auth } from "../../services/firebaseConnection"
import { signInWithEmailAndPassword } from "firebase/auth"

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (!email.trim() || !password.trim()) {
            alert("⚠️ Preencha todos os campos!");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                console.log("✅ Login realizado:", userCredential.user);
                navigate("/admin", { replace: true })
            })
            .catch((error) => {
                // Trata erros comuns
                switch (error.code) {
                    case "auth/invalid-email":
                        alert("Email inválido!");
                        break;
                    case "auth/user-not-found":
                        alert("Usuário não encontrado!");
                        break;
                    case "auth/wrong-password":
                        alert("Senha incorreta!");
                        break;
                    default:
                        alert("Erro ao tentar fazer login.");
                }
                console.error("❌ Erro no login:", error);
            });


    }

    return (
        <div className="flex flex-col items-center py-30 w-full h-screen select-none">
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
