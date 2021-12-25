import React, { useEffect } from 'react';
import {
  FooterContent,
  FooterLogo,
  FooterSubTitle,
  FooterTitle,
  FooterGDSCLogo,
  FooterWrapper,
  TopMargin,
} from '../../../styles/layouts';
import googleDevelopers from '../../../img/googleDevelopers.png';
import GDSCChapterLogo from '../../../img/GDSC-Chapter-Logo.png';
import { useLocation } from 'react-router';

export const Footer = () => {
  const location = useLocation();
  const locate = location.pathname;

  return (
    <FooterWrapper className={locate === '/onboarding' ? 'none' : ''}>
      <FooterContent>
        <TopMargin />
        <FooterLogo src={googleDevelopers} />
        <TopMargin />
        <FooterGDSCLogo src={GDSCChapterLogo} />
        <TopMargin />
        <FooterSubTitle>{'Copyright © '}GDSC Daejin 2021</FooterSubTitle>
        <FooterSubTitle>Created by Jason</FooterSubTitle>
        <FooterSubTitle>Designed by Harry</FooterSubTitle>
      </FooterContent>
    </FooterWrapper>
  );
};
