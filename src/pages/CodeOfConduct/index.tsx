import React from 'react';
import { BannerImage } from '../Introduce/styled';
import { LayoutContainer, TopMargin } from '../../Layout';
import { SubTitle, Title } from '../../common/Title/title';

export const CodeOfConduct = () => {
  return (
    <>
      <BannerImage src="img/RedBanner.png" />
      <LayoutContainer>
        <TopMargin />
        <Title>Code of Conduct</Title>
        <TopMargin />
        <SubTitle></SubTitle>
      </LayoutContainer>
    </>
  );
};
