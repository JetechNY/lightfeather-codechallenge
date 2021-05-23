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
      .then(
        (data) => {
          setSupervisor({ supList: data.results });
          console.log(data.results);
        });
  },[]);

  console.log("here",supervisor.supList)
  // console.log(data.results[0].login.uuid)
  // console.log(data.results[0].name.first)
  // console.log(data.results[0].name.last)
  
  return (
    <div>
      <div className="form-content">
        <header>Notification Form</header>
        <form className="register-form" onSubmit={handleSubmit} noValidate>
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
              type="checkbox"
              className="form-field"
              placeholder="Email"
              name="email-checkbox"
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
            <input
              id="phoneNumber-checkbox"
              type="checkbox"
              className="form-field"
              placeholder="Phone Number"
              name="phoneNumber-checkbox"
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
          </div>
          <div>
            <label htmlFor="supervisor" className="form-label">
              Supervisor
            </label>
            <input
              id="supervisor"
              className="form-field"
              placeholder="Supervisor"
              name="supervisor"
              // type="text" change to dropdown
              value={values.supervisor}
              onChange={handleChange}
            />
            {errors.supervisor && <p>{errors.supervisor}</p>}
          </div>

          <div>
            <label htmlFor="supervisorDropdown" className="form-label">
              Supervisor Dropdown
            </label>
            <select>
              <option disabled selected>
                -- Select --
              </option>
              {/* {
                <option> </option>
                supList.map(x => {
                  return(
                    <option title={x.login.uuid}> {x.name.firstName}</option>
                  )
                })
              } */}
            </select>
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
