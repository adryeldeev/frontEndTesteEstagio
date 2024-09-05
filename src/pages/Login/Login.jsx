import React, { Fragment } from "react";
import Form from "../../components/Form/Form";
import { useNavigate } from "react-router-dom";
import { Api } from "../../services/Api";
import { useAuth } from "../../Context/AuthProvider";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (userData) => {
    try {
      const response = await Api.post("/session", userData);
      const { user, accessToken, refreshToken } = response.data;
      setAuth({ user, accessToken, refreshToken });
      navigate("/", { replace: true });
    } catch (err) {
      console.error(
        "Erro ao fazer login:",
        err.response ? err.response.data : err.message
      );
    }
  };

  return (
    <Fragment>
      <div className="content_login">
        <div className="content_info">
          <Form
            title={"Login"}
            showName={false}
            buttonText="Login"
            onSubmit={handleLogin}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
