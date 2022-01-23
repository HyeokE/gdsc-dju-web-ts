import React from 'react';
import {
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';
import { MainText, SubTitle, Title } from '../../components/common/Title/title';
import { Banner } from '../../img/Banner/Banner';
import RedBanner from '../../img/Banner/RedBanner.png';
import { codeOfConduct } from '../../api/pageData/codeOfConduct';
import BulletList from '../../components/common/BulletList';

export const CodeOfConduct = () => {
  return (
    <>
      <BannerWrapper>
        <Banner src={RedBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>Code of Conduct (Google)</Title>
          <TopMargin />
          {codeOfConduct.map((data, id) => (
            <>
              <SubTitle>{data.title}</SubTitle>
              <MainText>
                <BulletList text={data.content} />
              </MainText>
              <TopMargin />
            </>
          ))}
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
