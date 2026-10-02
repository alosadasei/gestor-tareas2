import Link from "next/link";

export default function Inicio() {
  return (
    <>
      <h1>Bienvenido</h1>
      <p>
        <Link href="/login">Entrar</Link> · <Link href="/tablero">Ver el tablero</Link>
      </p>
    </>
  );
}
