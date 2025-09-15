import { Link } from "@tanstack/react-router";

export function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex gap-4 text-white">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Criar Conta</Link>
    </nav>
  );
}
