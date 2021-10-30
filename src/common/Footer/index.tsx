import React from 'react';
import {
  FooterContent,
  FooterLogo,
  FooterSubTitle,
  FooterTitle,
  FooterGDSCLogo,
  FooterWrapper,
  TopMargin,
} from '../../Layout';
import googleDevelopers from '../../img/googleDevelopers.png';
import GDSCChapterLogo from '../../img/GDSC-Chapter-Logo.png';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <TopMargin />
        <FooterLogo src={googleDevelopers} />
        <TopMargin />
        <FooterGDSCLogo src={GDSCChapterLogo} />
        <TopMargin />
        <FooterSubTitle>{'Copyright © '}GDSC Daejin 2021</FooterSubTitle>
      </FooterContent>
    </FooterWrapper>
  );
};
