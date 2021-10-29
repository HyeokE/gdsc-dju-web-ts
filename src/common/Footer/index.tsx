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

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <TopMargin />
        <FooterLogo src={process.env.PUBLIC_URL + 'googleDevelopers.png'} />
        <TopMargin />
        <FooterGDSCLogo
          src={process.env.PUBLIC_URL + 'GDSC-Chapter-Logo.png'}
        />
        <TopMargin />
        <FooterSubTitle>{'Copyright © '}GDSC Daejin 2021</FooterSubTitle>
      </FooterContent>
    </FooterWrapper>
  );
};
