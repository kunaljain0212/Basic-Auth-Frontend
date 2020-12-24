import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Home.styles.css";

function Home() {
  return (
    <div className="container">
      <div className="title">Basic Authentication Web Application</div>
      <div className="Buttons">
        <Link to="/signin">
          <button className="signin">Signin</button>
        </Link>
        <Link to="/signup">
          <button className="signin">Signup</button>
        </Link>
        <Link to="/profile">
          <button className="signin">Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Home);
