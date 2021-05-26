import React from 'react';
import {  Route, Switch, HashRouter } from "react-router-dom";
import HomePage from './HomePage';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Routes= () => {

    return (
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
          </Switch>
        </HashRouter>
      );
};

export default Routes;