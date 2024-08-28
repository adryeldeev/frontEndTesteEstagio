import React from "react";
import { Fragment } from "react/jsx-runtime";
import Button from "../../components/Form/Button";
import "./Style.css";
import Index from "../../components/Task/Index";

const Home = () => {
  return (
    <Fragment>
      <Index title={"Cadastrar Tarefa"} buttonText="Salvar" />
      <div className="content_cadastro">
        <div className="content_lista">
          <div className="content_info_table">
            <div className="content_titulo">
              <h2>Lista de tarefas</h2>
            </div>
            <div className="content_lista_table">
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Supermercado</td>
                    <td className="text_descricao">Comprar 10 laranjas</td>
                    <div className="content_buttons">
                      <td>
                        <Button buttonOne={"Editar"} />
                      </td>
                      <td>
                        <Button buttonOne={"Excluir"} />
                      </td>
                    </div>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
