import React from 'react';
import {
  FooterContent,
  FooterGDSCLogo,
  FooterLogo,
  FooterLogoWrapper,
  FooterSubTitle,
  FooterWrapper,
  TopMargin,
} from '../../../styles/layouts';
import GDSCLogo from '../../../img/GDSCDaejinLogo.svg';
import GoogleDeveloperLogo from '../../../img/googleDevelopers.svg';

import { useLocation } from 'react-router';

export const Footer = () => {
  const location = useLocation();
  const locate = location.pathname;

  return (
    <FooterWrapper className={locate === '/onboarding' ? 'none' : ''}>
      <FooterContent>
        <FooterLogoWrapper>
          <FooterLogo src={GoogleDeveloperLogo} />
        </FooterLogoWrapper>
        <FooterLogoWrapper>
          <FooterGDSCLogo src={GDSCLogo} />
        </FooterLogoWrapper>
        <FooterSubTitle>{'Copyright © '}GDSC Daejin 2021</FooterSubTitle>
        <FooterSubTitle>Created by Jason</FooterSubTitle>
        <FooterSubTitle>Designed by Harry</FooterSubTitle>
      </FooterContent>
    </FooterWrapper>
  );
};
