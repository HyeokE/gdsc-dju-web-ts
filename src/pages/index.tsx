import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './Home';
import { Blog } from './Blog';
import { JoinUs } from './JoinUs';
import { CodeOfConduct } from './CodeOfConduct';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { Introduce } from './Introduce';

export const Pages = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/introduce'} component={Introduce} />
      <Route exact path={'/blog'} component={Blog} />
      <Route exact path={'/joinus'} component={JoinUs} />
      <Route exact path={'/conduct'} component={CodeOfConduct} />
      <Route exact path={'/signin'} component={SignIn} />
      <Route exact path={'/signup'} component={SignUp} />
    </Switch>
  );
};
