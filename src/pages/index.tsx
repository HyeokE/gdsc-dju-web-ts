import React, { lazy } from 'react';
import { Route, Routes } from 'react-router';
import Navigation from '../components/common/navigation/DeskNavigation';
import { Footer } from '../components/common/Footer';
import MobileMenu from '../components/common/navigation/MobileMenu';
import ScrollTop from '../components/common/ScrollTop';

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
