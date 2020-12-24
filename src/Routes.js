import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./components/auth/SignIn/Signin";
import Signup from "./components/auth/SignUp/Signup";
import Home from "./components/core/Home/Home";
import Password from "./components/users/PasswordChange/Password";
import Profile from "./components/users/Profile/Profile";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route exact="true" path="/profile" component={Profile} />
        <Route path="/profile/password" component={Password} />
      </Switch>
    </BrowserRouter>
  );
}
