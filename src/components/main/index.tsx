import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { useRecoilState } from 'recoil';
import Alert from '../common/Alert';
import { alertState } from '../../store/alert';
import GoogleSpinner from '../common/GoogleSpinner';

const Admin = lazy(() => import('../../pages/Admin'));
const OnBoard = lazy(() => import('../../pages/OnBoard'));
const Auth = lazy(() => import('../../pages/Auth'));
const Pages = lazy(() => import('../../pages'));
export const Main = () => {
  const [alert] = useRecoilState(alertState);

  return (
    <>
      <Suspense fallback={<GoogleSpinner />}>
        {alert.alertHandle && <Alert />}
        <Routes>
          <Route path={'/*'} element={<Pages />} />
          <Route path={'/main/*'} element={<Pages />} />
          <Route path={'/admin/*'} element={<Admin />} />
          <Route path={'/onboard/*'} element={<OnBoard />} />
          <Route path={'/auth/*'} element={<Auth />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Main;
