import React, { useState } from "react";
import "./Form.css";
import FormSubmit from "./FormSubmit";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div>
      {!isSubmitted ? <FormSubmit submitForm={submitForm} /> : <FormSuccess />}
    </div>
  );
};

export default Form;
