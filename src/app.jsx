import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import PrivateRoute from '@src/components/common/PrivateRoute';
import Toast from '@src/components/common/Toast';
import indexRoutes from './routes';

function App() {
  return (
    <>
      <Toast />
      <Switch>
        {indexRoutes.map((route) => {
          if (route.authenticated) {
            return <PrivateRoute path={route.path} component={route.component} key={route.name} />;
          }

          return <Route exact path={route.path} render={(props) => <route.component {...props} />} key={route.name} />;
        })}
      </Switch>
    </>
  );
}

export default hot(module)(App);
