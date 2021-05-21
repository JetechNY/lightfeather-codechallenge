import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [values, setvalues] = useState({
    firstName: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    supervisor: "",
  });

  return (
    <div className="form-container">
      <form className="register-form">
        <input
          value={values.firstName}
          id="first-name"
          className="form-field"
          placeholder="First Name"
          name="firstName"
        />
        <input
          value={values.lastname}
          id="last-name"
          className="form-field"
          placeholder="Last Name"
          name="lasttName"
        />
        <input
          id="email-checkbox"
          type="checkbox"
          className="form-field"
          placeholder="Email"
          name="email-checkbox"
        />
        <label for="email-checkbox"> Email </label>
        <input
          value={values.email}
          id="email"
          className="form-field"
          placeholder="Email"
          name="email"
        />
        <input
          id="phoneNumber-checkbox"
          type="checkbox"
          className="form-field"
          placeholder="Phone Number"
          name="phoneNumber-checkbox"
        />
        <label for="phoneNumber-checkbox"> Phone Number </label>
        <input
          value={values.phoneNumber}
          id="phoneNumber"
          className="form-field"
          placeholder="Phone Number"
          name="phoneNumber"
        />
        <input
          value={values.supervisor}
          id="supervisor"
          className="form-field"
          placeholder="Supervisor"
          name="supervisor"
        />
        <button class="form-field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
