import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './Home';
import { Blog } from './Blog';
import { JoinUs } from './JoinUs';
import { CodeOfConduct } from './CodeOfConduct';

export const Pages = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/blog'} component={Blog} />
      <Route exact path={'/joinus'} component={JoinUs} />
      <Route exact path={'/conduct'} component={CodeOfConduct} />
    </Switch>
  );
};
