import React, { useState } from "react";
import Button from "./Button";
import "./Form.css";
import { toast } from "react-toastify";

const Form = ({
  title,
  showName = true,
  onSubmit,
  buttonText = "Enviar",
  texto,
  onClick,
  textButton,
}) => {
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
    // Validação mais robusta
    if (!formData.email || !formData.password) {
      toast.error("Preencha todos os campos");
      return;
    }

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
                <label htmlFor="name">Nome:</label>
                <input
                  id="name"
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
                id="email"
                type="email"
                name="email"
                value={formData.email}
                placeholder="Digite seu e-mail"
                onChange={handleChange}
              />
            </div>
            <div className="input_text">
              <label htmlFor="password">Senha:</label>
              <input
                id="password"
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
          <span>
            {texto} <button onClick={onClick}>{textButton}</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Form;
