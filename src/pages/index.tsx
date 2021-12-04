import React from 'react';
import { Route, Routes } from 'react-router';
import { Home } from './Home';
import { Blog } from './Blog';
import { Question } from './QandA/index';
import { CodeOfConduct } from './CodeOfConduct';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import { Introduce } from './Introduce';
import { JoinUs } from './JoinUs';
import { Recruitment } from './TeamRecruitment';
import Apply from './Apply';
import Admin from './Admin';

export const Pages = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<Home />} />
      <Route path={'/introduce'} element={<Introduce />} />
      <Route path={'/blog'} element={<Blog />} />
      <Route path={'/joinus/*'} element={<JoinUs />} />
      <Route path={'/joinus/:id'} element={<Recruitment />} />
      <Route path={'/conduct'} element={<CodeOfConduct />} />
      <Route path={'/question'} element={<Question />} />
      <Route path={'/signin'} element={<SignIn />} />
      <Route path={'/signup'} element={<SignUp />} />
      <Route path={'/apply'} element={<Apply />} />
      <Route path={'/admin'} element={<Admin />} />
    </Routes>
  );
};
