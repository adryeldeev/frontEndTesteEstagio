import React from "react";
import { useAuth } from "../../Context/AuthProvider";

const Header = () => {
  const { auth, setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({}); // Limpa o estado de autenticação
  };

  return (
    <div>
      {auth.user ? (
        <p>Olá, {auth.user.name}!</p>
      ) : (
        <p>Não tem usuário logado</p>
      )}
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
};

export default Header;
