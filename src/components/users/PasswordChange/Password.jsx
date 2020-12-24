import React, { useState } from "react";
import { changePassword } from "./helper";
import "./Password.styles.css";

function Password() {
  const [values, setValues] = useState({
    oldPassword: "",
    newPassword: "",
    error: "",
    success: false,
  });

  const { oldPassword, newPassword, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  console.log(values);
  const onsubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    changePassword({ newPassword, oldPassword })
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            newPassword: "",
            oldPassword: "",
            error: "",
            success: true,
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
              type="email"
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
        </div>
      </div>
    </>
  );
}

export default Password;
