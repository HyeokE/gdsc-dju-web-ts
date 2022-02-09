import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const JoinUs = lazy(() => import('./JoinUs'));
const Recruitment = lazy(() => import('./Recruitment'));
const RecruitForm = lazy(() => import('./RecruitForm'));
const Recruit = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<JoinUs />} />
      <Route path={'/detail/:id'} element={<Recruitment />} />
      <Route path={'/form'} element={<RecruitForm />} />
    </Routes>
  );
};

export default Recruit;
