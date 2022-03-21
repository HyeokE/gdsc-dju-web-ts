import React, { lazy, Suspense, useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useRecoilState } from 'recoil';
import Alert from '../common/Alert';
import { alertState } from '../../store/alert';
import GoogleSpinner from '../Lottie/GoogleSpinner';
import { recruitmentState } from '../../store/recruitHandler';
import API from '../../api';
import { AnimatePresence } from 'framer-motion';
import { loaderState } from '../../store/loader';
import Navigation from '../common/navigation/DeskNavigation';
import { Footer } from '../common/Footer';
import Admin from '../../pages/Admin';

const OnBoard = lazy(() => import('../../pages/OnBoard'));
const Auth = lazy(() => import('../../pages/Auth'));
const Pages = lazy(() => import('../../pages'));
export const Main = () => {
  const [alert, setAlert] = useRecoilState(alertState);
  const [recruitment, setRecruitment] = useRecoilState(recruitmentState);
  const [loading] = useRecoilState(loaderState);
  const getRecruitment = async (): Promise<void> => {
    const data = await API.getRecruitmentInfo();
    setRecruitment({ ...recruitment, ...data.data.data });
  };
  useLayoutEffect(() => {
    getRecruitment();
  }, []);

  return (
    <>
      {loading.load && <GoogleSpinner background={true} />}
      <Navigation />
      <AnimatePresence>{alert.alertHandle && <Alert />}</AnimatePresence>
      <Suspense fallback={<GoogleSpinner background={true} />}>
        <Routes>
          <Route path={'/*'} element={<Pages />} />
          <Route path={'/admin/*'} element={<Admin />} />
          <Route path={'/onboard/*'} element={<OnBoard />} />
          <Route path={'/auth/*'} element={<Auth />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default Main;
