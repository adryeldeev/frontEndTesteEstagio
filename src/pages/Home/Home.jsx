import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Form/Button";
import "./Style.css";
import { axiosPrivate } from "../../services/Api";
import { toast } from "react-toastify";
import Task from "../../components/Task/Task";
import { useAuth } from "../../Context/AuthProvider";

const Home = () => {
  const { auth } = useAuth();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [auth.accessToken]);

  const fetchData = async () => {
    try {
      const response = await axiosPrivate.get("/listtask");
      if (response.status === 200) {
        setData(Array.isArray(response.data.tasks) ? response.data.tasks : []);
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 401) {
        toast("Não autorizado. Faça login novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (taskData) => {
    try {
      const response = await axiosPrivate.post("/createtask", taskData);
      if (response.status === 200) {
        toast.success("Cadastro com sucesso!");
        fetchData();
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cadastrar tarefa");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axiosPrivate.delete(`/taskdelete/${id}`);
      if (response.status === 200) {
        toast.success("Tarefa excluída com sucesso!");
        fetchData();
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao excluir tarefa");
    }
  };

  const handleNavigation = (id) => {
    navigate(`/editartask/${id}`);
  };

  return (
    <div className="content_cadastro">
      {auth?.user ? (
        <>
          <Task
            title={"Cadastrar Tarefa"}
            buttonText="Salvar"
            onSubmit={handleSubmit}
          />
          <div className="content_lista">
            <div className="content_info_table">
              <div className="content_titulo">
                <h2>Lista de tarefas</h2>
              </div>
              {loading ? (
                <p>Carregando tarefas...</p>
              ) : data.length === 0 ? (
                <p>Não há tarefas cadastradas</p>
              ) : (
                <div className="content_lista_table">
                  <table style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((task) => (
                        <tr key={task.id}>
                          <td>{task.titulo}</td>
                          <td className="text_descricao">{task.descricao}</td>
                          <td className="content_buttons">
                            <Button
                              buttonOne={"Editar"}
                              onClick={() => handleNavigation(task.id)}
                            />
                            <Button
                              buttonOne={"Excluir"}
                              onClick={() => handleDelete(task.id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <p>Você precisa fazer login para acessar esta página.</p>
      )}
    </div>
  );
};

export default Home;
