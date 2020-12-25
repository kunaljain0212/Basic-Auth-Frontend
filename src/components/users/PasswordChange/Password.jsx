import React, { useState } from "react";
import { changePassword } from "./helper";
import "./Password.styles.css";

function Password() {
  const [values, setValues] = useState({
    oldPassword: "",
    newPassword: "",
    error: "",
    success: false,
    message: "",
  });

  const { oldPassword, newPassword, error, success, message } = values;

  //Input change handling event
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  //Submit 
  const onsubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    changePassword({ newPassword, oldPassword })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            newPassword: "",
            oldPassword: "",
            error: "",
            success: true,
            message: data.message,
          });
        }
      })
      .catch((err) => {
        console.log("Error in changing password");
      });
  };

  return (
    <>
      <div className="container">
        <div className="formbox">
          <div className="form-group">
            <input
              type="password"
              placeholder="Old Password"
              onChange={handleChange("oldPassword")}
              value={oldPassword}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="New Password"
              onChange={handleChange("newPassword")}
              value={newPassword}
            />
          </div>
          <div className="form-group">
            <button onClick={onsubmit}>Change Password</button>
          </div>
          {error ? <p>{error}</p> : <p style={{color: 'green'}}>{message}</p>}
        </div>
      </div>
    </>
  );
}

export default Password;
