import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signin } from "../helper";
import "./Signin.styles.css";

function Signin() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
    didRedirect: false,
  });

  const { email, password, error, success, didRedirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  console.log(values);
  const onsubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signin({ email, password })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.token);
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
          });
        }
      })
      .catch((err) => {
        console.log("Error in signup");
      });
  };

  const performRedirect = () => {
    if (didRedirect) {
      return <Redirect to="/profile" />;
    } else {
      return <Redirect to="/" />;
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
        </div>
      </div>
      {performRedirect()}
    </>
  );
}
export default Signin;
