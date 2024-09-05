import React, { Fragment, useState } from "react";
import Button from "../Form/Button";
import "./Style.css";
import { getLocalStorage } from "../../Context/Utils";

const Task = ({ title, buttonText = "Salvar", onSubmit }) => {
  const user = getLocalStorage();
  const { id } = user || {};

  const [formData, setFormData] = useState({ titulo: "", descricao: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataWithUserId = { ...formData, userId: id };

    onSubmit(dataWithUserId);
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
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
              />
            </div>
            <div className="content_input">
              <label htmlFor="descricao">Descrição</label>
              <input
                id="descricao"
                type="text"
                placeholder="Digite a descrição da tarefa"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
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

export default Task;
