import React from 'react';
import { Route, Routes } from 'react-router';
import ScrollTop from '../components/common/ScrollTop';
import FaqDetail from './Faq/FaqDetail';
import Introduce from './Introduce';
import Faq from './Faq';
import Home from './Home';
import Recruit from './Recruit';
import CodeOfConduct from './CodeOfConduct';

const Pages = () => {
  return (
    <>
      <ScrollTop />
      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/introduce'} element={<Introduce />} />
        <Route path={'/recruit/*'} element={<Recruit />} />
        <Route path={'/conduct'} element={<CodeOfConduct />} />
        <Route path={'/faq/*'} element={<Faq />} />
        <Route path={'/faq/:id'} element={<FaqDetail />} />
      </Routes>
    </>
  );
};
export default Pages;
