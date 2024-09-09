import React, { Fragment } from "react";
import Task from "../../components/Task/Task";
import { useNavigate, useParams } from "react-router-dom";
import { axiosPrivate } from "../../services/Api";
import { toast } from "react-toastify";

const AtualizarTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (taskData) => {
    try {
      const response = await axiosPrivate.put(`/taskupdate/${id}`, taskData);
      if (response.status === 200) {
        toast.success("Atualizado com sucesso!");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao atualizar tarefa");
    }
  };

  return (
    <Fragment>
      <Task
        title="Atualizar Tarefa"
        buttonText="Salvar"
        onSubmit={handleSubmit}
      />
      ;
    </Fragment>
  );
};

export default AtualizarTask;
