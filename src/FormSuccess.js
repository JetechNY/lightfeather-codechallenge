import React from "react";
import "./Form.css";

const FormSuccess = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="form-content">
      <h1 className="form-success">
        We have received your request! Your supervisor will be informed via
        email or phone.
      </h1>
      <div>
        <button onClick={refreshPage}>Click to reload!</button>
      </div>
    </div>
  );
};

export default FormSuccess;
