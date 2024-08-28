import React, { Fragment, useState } from "react";
import Button from "../Form/Button";
import "./Style.css";
const Index = ({ title, buttonText = "Salvar", onSubmit }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { titulo, descricao };
    onSubmit(data);
  };
  return (
    <Fragment>
      <div className="content_info">
        <div className="text_titulo">
          <h2>{title}</h2>
        </div>
        <div className="content_form">
          <form onSubmit={handleSubmit}>
            <div className="content_input">
              <label htmlFor="titulo">Titulo</label>
              <input
                id="titulo"
                type="text"
                placeholder="Digite o titulo da tarefa"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
            <div className="content_input">
              <label htmlFor="descricao">Descrição</label>
              <input
                id="descricao"
                type="text"
                placeholder="Digite a descrição da tarefa"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>
            <div className="button_task">
              <Button buttonOne={buttonText} />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
