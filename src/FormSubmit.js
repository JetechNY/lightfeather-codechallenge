import React, { useEffect, useState } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSubmit = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [supervisor, setSupervisor] = useState({
    supList: [],
  });

  useEffect(() => {
    fetch("https://6099a4760f5a13001721985c.mockapi.io/api/supervisors")
      .then((response) => response.json())
      .then((data) => {
        setSupervisor({ supList: data.results });
        console.log(data.results);
      });
  }, []);

  console.log("here", supervisor.supList);

  return (
    <div>
      <div className="form-content">
        <header>Notification Form</header>
        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <div>
            You have selected contact method {values.checked}
          </div>
          <div>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              id="firstName"
              className="form-field"
              placeholder="Enter your First Name"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <p>{errors.firstName}</p>}
          </div>
          <div>
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              id="lastName"
              className="form-field"
              placeholder="Enter your Last Name"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p>{errors.lastName}</p>}
          </div>
          <div className="contact-method">
            How would you prefer to be notified?
            <input
              id="email-checkbox"
              type="radio"
              onChange={handleChange}

              value="email"
              className="form-field"
              placeholder="Email"
              name="checked"
            />
            <label htmlFor="email" for="email-checkbox">
              {" "}
              Email{" "}
            </label>
            <input
              id="email"
              type="email"
              className="form-field"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <input
              id="phoneNumber-checkbox"
              type="radio"
              value="phone"
              onChange={handleChange}

              className="form-field"
              placeholder="Phone Number"
              name="checked"
            />
            <label htmlFor="phoneNumber" for="phoneNumber-checkbox">
              {" "}
              Phone Number{" "}
            </label>
            <input
              id="phoneNumber"
              className="form-field"
              placeholder="(XXX) XXX - XXXX"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
            />
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
          </div>

          <div>
            <label htmlFor="supervisorDropdown" className="form-label">
              Supervisor
            </label>
            {/* supervisor.supList */}
            <select id="supervisor" name="supervisor" onChange={handleChange}>
              <option disabled selected>
                -- Select --
              </option>
              {supervisor.supList.map((x) => {
                return (
                  <option value={x.login.uuid}>
                    {x.name.first} {x.name.last}
                  </option>
                );
              })}
            </select>
            {errors.supervisor && <p>{errors.supervisor}</p>}
          </div>

          <div>
            <button class="form-field" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSubmit;
