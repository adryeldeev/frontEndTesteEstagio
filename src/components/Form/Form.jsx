import React, { useState } from "react";
import Button from "./Button";
import "./Form.css";

const Form = ({ title, showName = true, onSubmit, buttonText = "Enviar" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = showName
      ? formData
      : { email: formData.email, password: formData.password };

    onSubmit(dataToSubmit);
  };

  return (
    <div className="content_form">
      <div className="contente_cadastro">
        <form onSubmit={handleSubmit} className="form">
          <h2>{title}</h2>
          <div className="text_cadastro">
            {showName && (
              <div className="input_text">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Digite seu nome"
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="input_text">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Digite seu e-mail"
                onChange={handleChange}
              />
            </div>
            <div className="input_text">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Digite sua senha"
                onChange={handleChange}
              />
            </div>
            <div className="button">
              <Button buttonOne={buttonText} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
