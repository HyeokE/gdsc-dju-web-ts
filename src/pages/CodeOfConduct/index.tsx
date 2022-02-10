import React from 'react';
import {
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  NavigationBlock,
  TopMargin,
} from '../../styles/layouts';
import {
  MainText,
  SubCategory,
  SubTitle,
  Title,
} from '../../components/common/Title/title';
import { Banner } from '../../img/Banner/Banner';
import RedBanner from '../../img/Banner/RedBanner.png';
import { codeOfConduct } from '../../api/pageData/codeOfConduct';
import BulletList from '../../components/common/BulletList';

const CodeOfConduct = () => {
  return (
    <>
      <NavigationBlock />
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
              <SubCategory>{data.title}</SubCategory>
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
export default CodeOfConduct;
