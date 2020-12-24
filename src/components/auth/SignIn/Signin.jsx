import React from "react";
import "./Signin.styles.css";

function Signin() {
  return (
    <>
      <div className="container">
        <div className="formbox">
          <div className="form-group">
            <input type="text" name="" placeholder="Name" id="" />
          </div>
          <div className="form-group">
            <input type="email" name="" placeholder="Email" id="" />
          </div>
          <div className="form-group">
            <input type="password" name="" placeholder="Password" id="" />
          </div>
          <div className="form-group">
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signin;
