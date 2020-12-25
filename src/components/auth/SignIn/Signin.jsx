import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signin } from "../helper";
import "./Signin.styles.css";

function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    message: "",
    success: false,
    didRedirect: false,
  });

  const { email, password, error, success, message, didRedirect } = values;

  //Input change handling event
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  //Submit 
  const onsubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signin({ email, password })
      .then((data) => {
        sessionStorage.setItem("Token", data.token);
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            email: "",
            password: "",
            error: "",
            success: true,
            didRedirect: true,
            message: data.message,
          });
        }
      })
      .catch((err) => {
        console.log("Error in signup");
      });
  };

  //Redirect user to his profile
  const performRedirect = () => {
    if (didRedirect) {
      return <Redirect to="/profile" />;
    }
  };

  return (
    <>
      <div className="container">
        <div className="formbox">
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
          {error ? <p>{error}</p> : <p style={{ color: "green" }}>{message}</p>}
        </div>
      </div>
      {performRedirect()}
    </>
  );
}
export default Signin;
