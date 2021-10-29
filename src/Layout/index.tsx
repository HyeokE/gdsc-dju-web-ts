import React from 'react';
import { Route, Switch } from 'react-router';
import { Pages } from '../pages';
import Navigation from '../common/Navigation';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path={''} component={Pages} />
      </Switch>
    </>
  );
};

export default Layout;
