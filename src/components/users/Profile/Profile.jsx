import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Profile.styles.css";

function Profile() {
  return (
    <>
      <div className="container">
        <div className="formbox">
          <div className="profilebox">
            <h1>Kunal Jain</h1>
            <h1>jainkunal209@gmail.com</h1>
          </div>
          <Link to="/profile/password">
            <button>Change Password</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default withRouter(Profile);
