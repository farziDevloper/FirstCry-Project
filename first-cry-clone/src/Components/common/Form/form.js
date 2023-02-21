import "./form.css";
import React, { useState, useEffect } from "react";
import { formValidation } from "../../utils/formValidation";

// const errorsObj = {
//   email: "Please fill all the field!",
//   mobile_number: "Please Enter Mobile number!",
//   username: "Please Enter username!",
// };

function Form() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    mobile_number: "",
    address1: "",
    address2: "",
    pin: "",
  };
  const [values, setValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle submit is clicked");
    setFormErrors(formValidation(values, ["address2", "pin"]));
    setIsSubmit(true);
  };

  // const {validate,validateEntireData,errors} = useForm()

  const handleChange = (event) => {
    event.persist();
    let name = event.target.name;
    let val = event.target.value;

    // validate(event,name,val);

    setValues({
      ...values,
      [name]: val,
    });
  };

  const userMobile = (event) => {
    let name = event.target.name;
    let val = event.target.value;

    if (val.length > 0 && /^[0-9]+$/.test(val)) {
      setValues({
        ...values,
        [name]: val,
      });
    } else if (val.length === 0) {
      setValues({
        ...values,
        [name]: "",
      });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [formErrors]);

  return (
    <div className="App">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="E-mail" value={values.email} onChange={handleChange} />
        <p>{formErrors.email}</p>
        <input type="password" name="password" placeholder="password" value={values.password} onChange={handleChange} />
        <p>{formErrors.password}</p>
        <input type="text" name="username" placeholder="username" value={values.username} onChange={handleChange} />
        <p>{formErrors.username}</p>
        <input
          type="text"
          name="mobile_number"
          placeholder="mobile number"
          value={values.mobile_number}
          onChange={userMobile}
        />
        <p>{formErrors.mobile_number}</p>
        <input type="text" name="address1" placeholder="address1" value={values.address1} onChange={handleChange} />
        <p>{formErrors.address1}</p>
        <input type="text" name="address2" placeholder="address2" value={values.address2} onChange={handleChange} />
        <p>{formErrors.address2}</p>
        <input type="text" name="pin" placeholder="pin" value={values.pin} onChange={handleChange} />
        <p>{formErrors.address2}</p>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
