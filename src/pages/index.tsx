import React, { lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import Navigation from '../components/common/navigation/DeskNavigation';
import { Footer } from '../components/common/Footer';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../store/recruitHandler';
import API from '../api';
import { hideNavigation } from '../store/hooks/hideNavigation';
import MobileMenu from '../components/common/navigation/MobileMenu';
import ScrollTop from '../components/common/ScrollTop';
import GoogleSpinner from '../components/Lottie/GoogleSpinner';
import { loaderState } from '../store/loader';

const Home = lazy(() => import('./Home'));
const Introduce = lazy(() => import('./Introduce'));
const Recruit = lazy(() => import('./Recruit'));
const CodeOfConduct = lazy(() => import('./CodeOfConduct'));
const Faq = lazy(() => import('./Faq'));
const FaqDetail = lazy(() => import('./Faq/FaqDetail'));

const Pages = () => {
  return (
    <>
      <ScrollTop />
      <MobileMenu />
      <Navigation />
      <Routes>
        <Route path={'/*'} element={<Home />} />
        <Route path={'/introduce'} element={<Introduce />} />
        <Route path={'/recruit/*'} element={<Recruit />} />
        <Route path={'/conduct'} element={<CodeOfConduct />} />
        <Route path={'/faq/*'} element={<Faq />} />
        <Route path={'/faq/:id'} element={<FaqDetail />} />
      </Routes>

      <Footer />
    </>
  );
};
export default Pages;
