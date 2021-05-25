import React from 'react';
import {  Route, Switch, HashRouter } from "react-router-dom";
import HomePage from './HomePage';
import SignUp from './SignUp';

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
          </Switch>
        </HashRouter>
      );
};

export default Routes;