import { Link } from "@tanstack/react-router";

export default function Home() {
  return (
    <div className="page">
      <h1>Bem-vindo!</h1>
      <p>Escolha uma opção:</p>
      <div className="buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Criar Conta</Link>
      </div>
    </div>
  );
}
