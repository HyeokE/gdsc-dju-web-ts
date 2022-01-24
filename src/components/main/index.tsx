import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Pages } from '../../pages';
import { useRecoilState } from 'recoil';
import Alert from '../common/Alert';
import { alertState } from '../../store/alert';

import { Footer } from '../common/Footer';

import { menuState } from '../../store/menu';
import MobileMenu from '../common/navigation/MobileMenu';
import Navigation from '../common/navigation/DeskNavigation';
import MemberCardModal from '../common/Modal/MemberCardModal';
import { modalState } from '../../store/modal';
import GoogleSpinner from '../common/GoogleSpinner';
import { recruitmentState } from '../../store/recruitHandler';
import API from '../../api';

export const Main = () => {
  const [alert] = useRecoilState(alertState);
  const [navHandler, setNavHandler] = useState<boolean>(true);
  const [recruitment, setRecruitment] = useRecoilState(recruitmentState);
  const hideNavigation = () => {
    if (location.pathname.includes('/onboarding')) {
      setNavHandler(false);
    } else {
      setNavHandler(true);
    }
  };
  const getRecruitment = async (): Promise<void> => {
    const data = await API.getRecruitmentInfo();
    setRecruitment({ ...recruitment, ...data.data });
  };
  useEffect(() => {
    hideNavigation();
    getRecruitment();
  }, []);

  return (
    <>
      <Suspense fallback={<GoogleSpinner />}>
        <MobileMenu />
        {navHandler ? <Navigation /> : null}
        {alert.alertHandle && <Alert />}

        {/*<Alert />*/}
        <Routes>
          <Route path={'*'} element={<Pages />} />
        </Routes>
        {navHandler ? <Footer /> : null}
      </Suspense>
    </>
  );
};

export default Main;
