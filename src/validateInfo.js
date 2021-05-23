export default function validateInfo(values) {
  let errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = " First name is required";
  } else if (!/^[A-Za-z]+/.test(values.firstName.trim())) {
    errors.firstName = "Enter a valid first name";
  }

  if (!values.lastName.trim()) {
    errors.lastName = " Last name is required";
  } else if (!/^[A-Za-z]+/.test(values.lastName.trim())) {
    errors.lastName = "Enter a valid last name";
  }

  // if (!values.email) {
  //   errors.email = "Email required";
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = "Email address is invalid";
  // }

  if (!values.email || !values.phoneNumber) {
    errors.email = " Please pick email or text";
  }
  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.supervisor.trim()) {
    errors.supervisor = " Supervisor is required";
  } else if (!/^[A-Za-z]+/.test(values.supervisor.trim())) {
    errors.supervisor = "Please select your Supervisor";
  }

  return errors;
}
