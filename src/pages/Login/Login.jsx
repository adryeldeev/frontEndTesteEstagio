import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "../../components/Form/Form";
import { useAuth } from "../../Context/AuthProvider";
import { Api } from "../../services/Api";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async (userData) => {
    setError("");
    try {
      const response = await Api.post("/session", userData);

      const { user, accessToken, refreshToken } = response.data;
      setAuth({ user, accessToken, refreshToken });
      navigate("/", { replace: true });
    } catch (err) {
      const errorMessage = err.response
        ? err.response.data.message
        : "Erro desconhecido";
      setError("Credenciais inválidas");
      toast.error(`Erro ao fazer login: ${errorMessage}`);
      console.log("Erro ao fazer login:", errorMessage);
    }
  };

  const handleNavigate = () => {
    navigate("/cadastrar");
  };

  return (
    <Fragment>
      <div className="content_login">
        <div className="content_info">
          <Form
            title="Login"
            showName={false}
            buttonText="Login"
            onSubmit={handleLogin}
            texto="Não tem conta?"
            onClick={handleNavigate}
            textButton="Cadastre-se"
          />
          {error && (
            <div role="alert" className="error-message">
              {error}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
