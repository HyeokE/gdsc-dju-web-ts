import React from 'react';
import { Route, Routes } from 'react-router-dom';

import SignIn from './SignUp';

const Auth = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<SignIn />} />
      <Route path={'/signin'} element={<SignIn />} />
    </Routes>
  );
};

export default Auth;
