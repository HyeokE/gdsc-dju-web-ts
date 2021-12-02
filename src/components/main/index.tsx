import React from 'react';
import { Route, Routes } from 'react-router';
import { Pages } from '../../pages';
import Navigation from '../common/Navigation';
import { useRecoilState } from 'recoil';
import { Footer } from '../common/Footer';
import MoblieMenu from '../common/Navigation/MobileMenu';
import Alert from '../common/Alert';
import { alertState } from '../../api/hooks/alert';

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
  return (
    <>
      <Navigation />
      <MoblieMenu />
      {alert.alertHandle && <Alert />}
      {/*<Alert />*/}
      <Routes>
        <Route path={'*'} element={<Pages />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
