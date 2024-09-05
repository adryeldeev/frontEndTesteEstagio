import React from "react";
import Form from "../../components/Form/Form";

import { useNavigate } from "react-router-dom";
import { Api } from "../../services/Api";

const CadastrarUser = () => {
  const navigate = useNavigate();
  const handleSubmit = (userData) => {
    Api.post("/createusers", userData)
      .then((response) => {
        if (response.status === 200) console.log(response.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar usuário:", error);
      });
  };

  return (
    <div className="content_cadastro">
      <div className="content_info">
        <Form
          title={"Cadastra-se"}
          showName={true}
          buttonText="Cadastrar"
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CadastrarUser;
