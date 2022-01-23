import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import GoogleSpinner from '../components/common/GoogleSpinner';

const Home = lazy(() => import('./Home'));
const Introduce = lazy(() => import('./Introduce'));
const JoinUs = lazy(() => import('./JoinUs'));
const Recruitment = lazy(() => import('./Recruitment'));
const CodeOfConduct = lazy(() => import('./CodeOfConduct'));
const Faq = lazy(() => import('./Faq'));
const FaqDetail = lazy(() => import('./Faq/FaqDetail'));
const Admin = lazy(() => import('./Admin'));
const OnBoarding = lazy(() => import('./OnBoarding'));

export const Pages = () => {
  return (
    <Suspense fallback={<GoogleSpinner />}>
      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/introduce'} element={<Introduce />} />
        <Route path={'/joinus/*'} element={<JoinUs />} />
        <Route path={'/joinus/:id'} element={<Recruitment />} />
        <Route path={'/conduct'} element={<CodeOfConduct />} />
        <Route path={'/faq/*'} element={<Faq />} />
        <Route path={'/faq/:id'} element={<FaqDetail />} />
        <Route path={'/admin/*'} element={<Admin />} />
        <Route path={'/onboarding/*'} element={<OnBoarding />} />
      </Routes>
    </Suspense>
  );
};
