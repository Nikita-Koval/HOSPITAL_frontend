import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/login/Login";
// import Registration from "./components/registration/Registration";

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/login'><Login /></Route> 
          {/* <Route path='/registration' component={Registration} /> */}
          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;