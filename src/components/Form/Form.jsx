import React, { useState } from "react";
import Button from "./Button";
import "./Form.css";
const Form = ({ title, showName = true, onSubmit, buttonText = "Enviar" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = { ...(showName && { name }), email, password };

    onSubmit(formData);
  };
  return (
    <>
      <div className="content_form">
        <div className="contente_cadastro">
          <form action="" onSubmit={handleSubmit} className="form">
            <h2>{title}</h2>
            <div className="text_cadastro">
              {showName && (
                <div className="input_text">
                  <label htmlFor="">Nome</label>
                  <input
                    type="text"
                    value={name}
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              <div className="input_text">
                <label htmlFor="">Email:</label>
                <input
                  type="text"
                  value={email}
                  placeholder="Digite seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input_text">
                <label htmlFor="">Senha</label>
                <input
                  type="text"
                  value={password}
                  placeholder="Digite sua senha"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="button">
                <Button buttonOne={buttonText} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
