import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Recruitment = lazy(() => import('./Recruitment'));
const RecruitmentDetail = lazy(() => import('./RecruitmentDetail'));
const RecruitForm = lazy(() => import('./RecruitForm'));
const Recruit = () => {
  return (
    <Routes>
      <Route path={'/*'} element={<Recruitment />} />
      <Route path={'/detail/:id'} element={<RecruitmentDetail />} />
      <Route path={'/form/:id'} element={<RecruitForm />} />
    </Routes>
  );
};

export default Recruit;
