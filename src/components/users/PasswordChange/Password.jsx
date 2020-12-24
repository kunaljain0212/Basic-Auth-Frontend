import React from "react";
import "./Password.styles.css";

function Password() {
  return (
    <>
      <div className="container">
        <div className="formbox">
          <div className="form-group">
            <input type="email" name="" placeholder="Old Password" id="" />
          </div>
          <div className="form-group">
            <input type="password" name="" placeholder="New Password" id="" />
          </div>
          <div className="form-group">
            <button>Change Password</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Password;
