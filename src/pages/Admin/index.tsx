import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminHome from './AdminHome';
import AdminMember from './AdminMember';
import AdminSetting from './AdminSetting';
import { authService, dbService } from '../../firebase/firebase';
import { useRecoilState } from 'recoil';
import { localUserState } from '../../store/localUser';

const Admin = () => {
  const [adminUser, setAdminUser] = useRecoilState(localUserState);
  const navigate = useNavigate();

  const checkAdminUser = () => {
    authService.onAuthStateChanged((user: any) => {
      if (user) {
        setAdminUser({
          ...adminUser,
          uid: user.uid,
        });

        try {
          dbService
            .collection('adminUsers')
            .doc(user.uid)
            .get()
            .then((data) => {
              const userData = data.data();
              setAdminUser({
                ...adminUser,
                uid: user.uid,
                nickname: userData?.nickName,
                name: userData?.name,
                phoneNumber: userData?.phoneNumber,
              });
              navigate('/admin');
            });
        } catch (e: any) {
          navigate('/auth');
          console.log(e.message);
        }
      } else {
        navigate('/auth');
        authService.signOut();
      }
    });
  };
  useLayoutEffect(() => {
    checkAdminUser();
  }, []);

  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path={'/*'} element={<AdminHome />} />
        <Route path={'/member'} element={<AdminMember />} />
        <Route path={'/setting'} element={<AdminSetting />} />
      </Routes>
    </>
  );
};

export default Admin;
