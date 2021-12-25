import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHeader from '../../components/admin/AdminHeader';
import AdminHome from './AdminHome';
import AdminMember from './AdminMember';
import AdminSetting from './AdminSetting';

const Admin = () => {
  return (
    <>
      <AdminHeader />
      <Routes>
        <Route path={'/*'} element={<AdminHome />} />
        <Route path={'/home'} element={<AdminHome />} />
        <Route path={'/member'} element={<AdminMember />} />
        <Route path={'/setting'} element={<AdminSetting />} />
      </Routes>
    </>
  );
};

export default Admin;
