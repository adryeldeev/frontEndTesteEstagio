import React, { Fragment } from "react";
import Form from "../../components/Form/Form";

const Index = () => {
  return (
    <Fragment>
      <div className="content_login">
        <div className="content_info">
          <Form title={"Login"} showName={false} buttonText="Login" />
        </div>
      </div>
    </Fragment>
  );
};

export default Index;
