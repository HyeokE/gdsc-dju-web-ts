import React, { Suspense, useLayoutEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Route, Routes } from 'react-router';
import { alertState } from '../store/alert';
import { recruitmentState } from '../store/recruitHandler';
import { loaderState } from '../store/loader';
import API from '../api';
import GoogleSpinner from '../components/Lottie/GoogleSpinner';
import Navigation from '../components/common/navigation/DeskNavigation';
import { AnimatePresence } from 'framer-motion';
import Alert from '../components/common/Alert';

import Admin from '../pages/Admin';
import { Footer } from '../components/common/Footer';
import Pages from '../pages';
import OnBoard from '../pages/OnBoard';
import Auth from '../pages/Auth';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../pages/Error';

const Layout = () => {
  const [recruitment, setRecruitment] = useRecoilState(recruitmentState);
  const getRecruitment = async (): Promise<void> => {
    const data = await API.getRecruitmentInfo();
    setRecruitment({ ...recruitment, ...data.data.data });
  };
  useLayoutEffect(() => {
    getRecruitment();
  }, []);

  return (
    <>
      <ErrorBoundary FallbackComponent={Error}>
        <Suspense fallback={<GoogleSpinner />}>
          <Routes>
            <Route path={'/*'} element={<Pages />} />
            <Route path={'/admin/*'} element={<Admin />} />
            <Route path={'/onboard/*'} element={<OnBoard />} />
            <Route path={'/auth/*'} element={<Auth />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
