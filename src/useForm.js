import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    loading: true,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    supervisor: "",
    checked: "1",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sent values", values);
    setErrors(validate(values));
    setIsSubmitting(true);

    if (errors.length = 0){
    fetch("https://6099a4760f5a13001721985c.mockapi.io/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        res.json();
      })
      .catch((error) => console.log("Error", error))
      .then((response) => console.log("Success", response));
    }


    };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
