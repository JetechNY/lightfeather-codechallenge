import React, { useState } from "react";
import "./App.css";

function App() {
  const [values, setvalues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    supervisor: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    setvalues({ ...values, firstName: event.target.value });
  };

  const handleLastNameInputChange = (event) => {
    setvalues({ ...values, lastName: event.target.value });
  };

  const handleEmailInputChange = (event) => {
    setvalues({ ...values, email: event.target.value });
  };

  const handlePhoneInputChange = (event) => {
    setvalues({ ...values, phoneNumber: event.target.value });
  };

  const handleSupervisorInputChange = (event) => {
    setvalues({ ...values, supervisor: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      (values.email || values.phoneNumber) &&
      values.supervisor
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        ) : null}
        <div>
          <input
            onChange={handleFirstNameInputChange}
            value={values.firstName}
            id="first-name"
            className="form-field"
            placeholder="First Name"
            name="firstName"
          />
          {submitted && !values.firstName ? (
            <span>Please enter a First Name</span>
          ) : null}
        </div>
        <div>
          <input
            onChange={handleLastNameInputChange}
            value={values.lastName}
            id="last-name"
            className="form-field"
            placeholder="Last Name"
            name="lasttName"
          />
          {submitted && !values.lastName ? (
            <span>Please enter a Last Name</span>
          ) : null}
        </div>
        <div>
          <input
            id="email-checkbox"
            type="checkbox"
            className="form-field"
            placeholder="Email"
            name="email-checkbox"
          />
          <label for="email-checkbox"> Email </label>
          <input
            onChange={handleEmailInputChange}
            value={values.email}
            id="email"
            className="form-field"
            placeholder="Email"
            name="email"
          />
          {submitted && (!values.email || !values.phoneNumber) ? (
            <span>Please enter a email </span>
          ) : null}
        </div>
        <div>
          <input
            id="phoneNumber-checkbox"
            type="checkbox"
            className="form-field"
            placeholder="Phone Number"
            name="phoneNumber-checkbox"
          />
          <label for="phoneNumber-checkbox"> Phone Number </label>
          <input
            onChange={handlePhoneInputChange}
            value={values.phoneNumber}
            id="phoneNumber"
            className="form-field"
            placeholder="Phone Number"
            name="phoneNumber"
          />
          {submitted && (!values.email || !values.phoneNumber) ? (
            <span>Please enter a phone number </span>
          ) : null}
        </div>
        <div>
          <input
            onChange={handleSupervisorInputChange}
            value={values.supervisor}
            id="supervisor"
            className="form-field"
            placeholder="Supervisor"
            name="supervisor"
          />
          {submitted && !values.supervisor ? (
            <span>Please enter your Supervisor</span>
          ) : null}{" "}
        </div>
        <div>
          <button class="form-field" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
