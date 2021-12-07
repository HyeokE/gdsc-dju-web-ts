import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnboardingHome from './OnBoardingHome';
import OnboardingMiddle from './OnboardingMiddle';
import OnboardingTicket from './OnboardingTicket';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router';
import OnBoardingLinks from './OnboardingLinks';

const OnBoarding = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path={'/*'} element={<OnboardingHome />} />
          <Route path={'/middle/*'} element={<OnboardingMiddle />} />
          <Route path={'/middle/:id'} element={<OnboardingMiddle />} />
          <Route path={'/almost'} element={<OnBoardingLinks />} />
          <Route path={'/ticket'} element={<OnboardingTicket />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default OnBoarding;
