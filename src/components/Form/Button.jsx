import React from "react";
import "./Style.css";

const Button = ({ buttonOne, buttonTwo, onClick }) => {
  const getButtonClass = (buttonLabel) => {
    if (buttonLabel === "Editar") {
      return "button-edit";
    }
    if (buttonLabel === "Salvar") {
      return "button-salvar";
    }
    if (buttonLabel === "Cadastrar" || buttonLabel === "Login") {
      return "button-user";
    }
    return "button-default";
  };

  return (
    <div className="button-container">
      <button className={getButtonClass(buttonOne)} onClick={onClick}>
        {buttonOne}
      </button>
      {buttonTwo && (
        <button className={getButtonClass(buttonTwo)}>{buttonTwo}</button>
      )}
    </div>
  );
};

export default Button;
