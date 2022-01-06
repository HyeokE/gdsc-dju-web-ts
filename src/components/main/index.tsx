import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Pages } from '../../pages';
import { useRecoilState } from 'recoil';
import Alert from '../common/Alert';
import { alertState } from '../../store/alert';
import Navigation from '../common/navigation/DeskNavigation';
import { Footer } from '../common/Footer';
import MobileMenu from '../common/navigation/MobileMenu';
import MobileMenuCategory from '../common/navigation/MobileMenuCategory';
import { MobileNavBackGround } from '../common/navigation/MobileMenu/styled';
import { sidebar } from '../common/Variants/NavigationAnimation';
import { menuState } from '../../store/menu';
import { ShortNavigation } from '../common/navigation/DeskNavigation/styled';

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
