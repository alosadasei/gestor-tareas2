import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gestor de Tareas",
  description: "Esqueleto de rutas del Gestor de Tareas con el App Router de Next",
};

// El layout envuelve todas las páginas: la cabecera se ve igual en login, tablero y detalle
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>
        <header style={{ background: "#1f2a44", color: "#fff", padding: "1rem 1.5rem", display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <strong>Gestor de Tareas</strong>
          <nav style={{ display: "flex", gap: "1rem" }}>
            <Link href="/login" style={{ color: "#cfe3ff" }}>Login</Link>
            <Link href="/tablero" style={{ color: "#cfe3ff" }}>Tablero</Link>
          </nav>
        </header>
        <main style={{ padding: "1.5rem" }}>{children}</main>
      </body>
    </html>
  );
}
