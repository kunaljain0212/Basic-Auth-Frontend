import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { getProfile } from "./helper";
import "./Profile.styles.css";

function Profile() {
  const [values, setValues] = useState({});

  useEffect(() => {
    getProfile()
      .then((profile) => {
        console.log(profile);
        setValues(profile.user);
      })
      .catch((err) => console.log(err));
  }, [values]);

  return (
    <>
      {values !== undefined ? (
        <div className="container">
          <div className="formbox">
            <div className="profilebox">
              <h1>{values.name}</h1>
              <h1>{values.email}</h1>
            </div>
            <Link to="/profile/password">
              <button>Change Password</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="formbox">
            <h1>ACCESS DENIED</h1>
          </div>
        </div>
      )}
    </>
  );
}

export default withRouter(Profile);
