import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import GoogleSpinner from '../components/Lottie/GoogleSpinner';

import Admin from '../pages/Admin';
import Pages from '../pages';
import OnBoard from '../pages/OnBoard';
import Auth from '../pages/Auth';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../pages/Error';

const Layout = () => {
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
