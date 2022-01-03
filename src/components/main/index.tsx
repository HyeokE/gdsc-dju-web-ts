import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Pages } from '../../pages';
import { useRecoilState } from 'recoil';
import Alert from '../common/Alert';
import { alertState } from '../../store/alert';
import Navigation from '../common/Navigation';
import { Footer } from '../common/Footer';
import MobileMenu from '../common/Navigation/MobileMenu';
import MobileMenuCategory from '../common/Navigation/MobileMenuCategory';
import { MobileNavBackGround } from '../common/Navigation/MobileMenu/styled';
import { sidebar } from '../common/Variants/NavigationAnimation';
import { menuState } from '../../store/menu';
import { ShortNavigation } from '../common/Navigation/styled';

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
  const [menu, setMenu] = useRecoilState(menuState);
  const containerRef = useRef(null);

  return (
    <>
      {navHandler ? <Navigation /> : null}
      <MobileMenu />
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
