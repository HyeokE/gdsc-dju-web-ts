import React from 'react';
import { Route, Routes } from 'react-router-dom';
import OnboardingHome from './OnBoardingHome';
import OnboardingMiddle from './OnboardingMiddle';
import OnboardingTicket from './OnboardingTicket';
import { AnimatePresence } from 'framer-motion';

const OnBoarding = () => {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path={'/*'} element={<OnboardingHome />} />
          <Route path={'/middle/*'} element={<OnboardingMiddle />} />
          <Route path={'/middle/:id'} element={<OnboardingMiddle />} />
          <Route path={'/ticket'} element={<OnboardingTicket />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default OnBoarding;
