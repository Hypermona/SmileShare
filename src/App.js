import React, { Component } from "react";
import Home from "./Component/Home";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./Component/Signin";
import SignUp from "./Component/Signup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={() => <Home />} />
          <Route path="/signin" component={() => <SignIn />} />
          <Route path="/signup" component={() => <SignUp />} />
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
