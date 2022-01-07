import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Pages } from '../../pages';
import { useRecoilState } from 'recoil';
import Alert from '../common/Alert';
import { alertState } from '../../store/alert';

import { Footer } from '../common/Footer';

import { menuState } from '../../store/menu';
import MobileMenu from '../common/navigation/MobileMenu';
import Navigation from '../common/navigation/DeskNavigation';

export const Main = () => {
  const [alert] = useRecoilState(alertState);
  const [navHandler, setNavHandler] = useState<boolean>(true);
  {
    /*Onboarding page navigation 숨김 */
  }
  const hideNavigation = () => {
    if (location.pathname.includes('/onboarding')) {
      setNavHandler(false);
    } else {
      setNavHandler(true);
    }
  };
  useEffect(() => {
    hideNavigation();
  }, []);

  return (
    <>
      <MobileMenu />
      {navHandler ? <Navigation /> : null}
      {alert.alertHandle && <Alert />}
      {/*<Alert />*/}
      <Routes>
        <Route path={'*'} element={<Pages />} />
      </Routes>
      {navHandler ? <Footer /> : null}
    </>
  );
};

export default Main;
