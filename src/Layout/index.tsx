import React, { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import GoogleSpinner from '../components/Lottie/GoogleSpinner';

import { ErrorBoundary } from 'react-error-boundary';
import Error from '../pages/Error';
import Pages from '../pages';
import Auth from '../pages/Auth';
import Admin from '../pages/Admin';

const Layout = () => {
  return (
    <>
      <ErrorBoundary FallbackComponent={Error}>
        <Routes>
          <Route path={'/*'} element={<Pages />} />
          <Route path={'/admin/*'} element={<Admin />} />
          {/*<Route path={'/onboard/*'} element={<OnBoard />} />*/}
          <Route path={'/auth/*'} element={<Auth />} />
          <Route path={'/error'} element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default Layout;
