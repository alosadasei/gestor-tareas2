"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

// Componente de cliente: necesita estado (useState) y navegación desde código (useRouter)
export default function Login() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  function enviar(e: FormEvent) {
    e.preventDefault();
    // No se validan credenciales de verdad: el submit lleva directamente al tablero
    router.push("/tablero");
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={enviar}>
        <label>
          Email{" "}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>{" "}
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}
