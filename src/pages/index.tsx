import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './Home';
import { Blog } from './Blog';
import { Question } from './QandA/index';
import { CodeOfConduct } from './CodeOfConduct';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { Introduce } from './Introduce';
import { JoinUs } from './JoinUs';
import { Recuritment } from './teamRecruitment';
import Apply from './Apply';
import Admin from './Admin';

export const Pages = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/introduce'} component={Introduce} />
      <Route exact path={'/blog'} component={Blog} />
      <Route exact path={'/joinus'} component={JoinUs} />
      <Route exact path={'/joinus/:id'} component={Recuritment} />
      <Route exact path={'/conduct'} component={CodeOfConduct} />
      <Route exact path={'/question'} component={Question} />
      <Route exact path={'/signin'} component={SignIn} />
      <Route exact path={'/signup'} component={SignUp} />
      <Route exact path={'/apply'} component={Apply} />
      <Route exact path={'/admin'} component={Admin} />
    </Switch>
  );
};
