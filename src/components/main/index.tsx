import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Pages } from '../../pages';
import { useRecoilState } from 'recoil';
import Alert from '../common/Alert';
import { alertState } from '../../store/alert';
import Navigation from '../common/Navigation';
import MoblieMenu from '../common/Navigation/MobileMenu';
import { Footer } from '../common/Footer';
import { MENU_KEY, menuState } from '../../store/menu';

export const Main = () => {
  // const [status, setStatus] = useRecoilState(statusState);
  // const [post, setPost] = useRecoilState(postState);
  // const [userInfomation, setUserInfomation] = useRecoilState(userDataState);
  // const setUser = () => {
  //   authService.onAuthStateChanged((user: any) => {
  //     setStatus({ ...status, [STATUS_KEY.INIT]: true });
  //
  //     if (user) {
  //       setStatus({ ...status, [STATUS_KEY.LOGGEDIN]: true });
  //       setStatus({ ...userInfomation, ...user });
  //
  //       localStorage.setItem('user', JSON.stringify(user));
  //     } else {
  //       setStatus({ ...status, [STATUS_KEY.LOGGEDIN]: false });
  //     }
  //   });
  // };
  //
  // const getPost = () => {
  //   dbService.collection('posts').onSnapshot((snapshot) => {
  //     const postArray = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setPost({ ...post, ...postArray });
  //     // localStorage.setItem('posts', JSON.stringify(postArray));
  //   });
  // };
  // const onLogOutClick = () => {
  //   authService.signOut();
  //   useResetRecoilState(userDataState);
  // };
  //
  // useEffect(() => {
  //   setUser();
  //   getPost();
  // }, []);
  const [alert] = useRecoilState(alertState);
  const [navHandler, setNavHandler] = useState<boolean>(true);

  const hideNavigation = () => {
    if (
      location.pathname === '/onboarding' ||
      location.pathname === '/onboarding/middle/:id' ||
      location.pathname === '/onboarding/middle/*' ||
      location.pathname === '/onboarding/ticket'
    ) {
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
      {navHandler ? (
        <>
          <Navigation />
          <MoblieMenu />
        </>
      ) : null}

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
