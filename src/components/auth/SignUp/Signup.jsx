import React, { useState } from "react";
import { signup } from "../helper";
import "./Signup.styles.css";

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
    message: "",
  });

  const { name, email, password, error, success, message } = values;

  //Input change handling event
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  //Submit
  const onsubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
            message: data.message,
          });
        }
      })
      .catch((err) => {
        console.log("Error in signup");
      });
  };

  return (
    <>
      <div className="container">
        <div className="formbox">
          <div className="form-group">
            <input
              type="name"
              placeholder="Name"
              onChange={handleChange("name")}
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange("email")}
              value={email}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              onChange={handleChange("password")}
              value={password}
            />
          </div>
          <div className="form-group">
            <button onClick={onsubmit}>Submit</button>
          </div>
          {error && !success ? (
            <p>{error}</p>
          ) : (
            <p style={{ color: "green" }}>{message}</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Signup;
