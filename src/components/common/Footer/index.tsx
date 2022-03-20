import React from 'react';

import GDSCLogo from '../../../img/GDSCDaejinLogo.svg';
import GoogleDeveloperLogo from '../../../img/googleDevelopers.svg';

import { useLocation } from 'react-router';
import {
  FooterContent,
  FooterCopyRight,
  FooterGDSCLogo,
  FooterLogo,
  FooterLogoWrapper,
  FooterSubTitle,
  FooterTitle,
} from './styled';
import { FooterWrapper } from './styled';

export const Footer = () => {
  const location = useLocation();
  const locate = location.pathname;

  return (
    <FooterWrapper className={locate === '/onboarding' ? 'none' : ''}>
      <FooterLogo>
        <FooterTitle>Google</FooterTitle>
        <FooterSubTitle>Privacy & Terms</FooterSubTitle>
        <FooterSubTitle>Community guidelines</FooterSubTitle>
      </FooterLogo>
      <FooterCopyRight>{'Copyright © '}GDSC Daejin 2021</FooterCopyRight>
    </FooterWrapper>
  );
};
