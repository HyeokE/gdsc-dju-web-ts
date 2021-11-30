import React from 'react';
import { Route, Switch } from 'react-router';

export default (
  <Switch>
    <Route path={'/'} />
    <Route path={'/introduce'} />
    <Route path={'/blog'} />
    <Route path={'/joinus'} />
    <Route path={'/joinus/:id'} />
    <Route path={'/conduct'} />
    <Route path={'/question'} />
    <Route path={'/signin'} />
    <Route path={'/signup'} />
    <Route path={'/apply'} />
    <Route path={'/admin'} />
  </Switch>
);
