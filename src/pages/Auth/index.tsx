import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';

const Auth = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<SignUp />} />
      <Route path={'/SignUp'} element={<SignUp />} />
    </Routes>
  );
};

export default Auth;
