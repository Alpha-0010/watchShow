import React from 'react';
import {  Route, Switch, HashRouter } from "react-router-dom";
import HomePage from './HomePage';

const Routes= () => {

    return (
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </HashRouter>
      );
};

export default Routes;