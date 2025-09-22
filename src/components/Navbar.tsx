import {Link} from "@tanstack/react-router";
import {useAuth} from "@/features/auth/hooks/useAuth.ts";

export function Navbar() {
  const {isAuthenticated, logout} = useAuth();
  return (
    <nav className="bg-gray-800 p-4 flex gap-4 text-white">
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Criar Conta</Link>
        </>
      )}
    </nav>
  );
}
