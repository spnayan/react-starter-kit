import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PrivateRoute from '@src/components/common/PrivateRoute';
import indexRoutes from './routes';

function App() {
  return (
    <Switch>
      {indexRoutes.map((route) => {
        if (route.authenticated) {
          return <PrivateRoute path={route.path} component={route.component} key={route.name} />;
        }

        return <Route exact path={route.path} render={(props) => <route.component {...props} />} key={route.name} />;
      })}
    </Switch>
  );
}

export default hot(module)(App);
