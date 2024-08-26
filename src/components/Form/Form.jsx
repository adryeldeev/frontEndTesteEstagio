import React, { useState } from "react";
import Button from "./Button";

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
      <h2>{title}</h2>
      <form action="" onSubmit={handleSubmit}>
        {showName && (
          <div className="">
            <label htmlFor="">Nome</label>
            <input
              type="text"
              value={name}
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="">
          <label htmlFor="">Email:</label>
          <input
            type="text"
            value={email}
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label htmlFor="">Senha</label>
          <input
            type="text"
            value={password}
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="">
          <Button buttonOne={buttonText} />
        </div>
      </form>
    </>
  );
};

export default Form;
