import React, { Fragment } from "react";
import Form from "../../components/Form/Form";

const Index = () => {
  return (
    <Fragment>
      <div className="content_cadastro">
        <div className="content_info">
          <Form title={"Cadastra-se"} showName={true} buttonText="Cadastrar" />
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
