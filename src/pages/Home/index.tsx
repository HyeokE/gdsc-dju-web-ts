import React from 'react';
import { ContainerInner, LayoutContainer } from '../../Layout';
import {
  BannerTitleWrapper,
  ButtonWrapper,
  LeftColorLinesWrapper,
  MainBannerText,
  MarginPage,
  RecruitingWrapper,
  RightColorLinesWrapper,
  StyledButton,
  StyledMainBanner,
} from './styled';
import Recruiting from '../../img/Recruiting';
import ColorLines from '../../img/ColorLines';

export const Home = () => {
  return (
    <>
      <StyledMainBanner>
        <LeftColorLinesWrapper>
          <ColorLines />
        </LeftColorLinesWrapper>
        <RightColorLinesWrapper>
          <ColorLines />
        </RightColorLinesWrapper>
      </StyledMainBanner>
      <BannerTitleWrapper>
        <RecruitingWrapper>
          <Recruiting />
          <MainBannerText>
            GDSC Daejin Univ. 에서 새로운 식구들을 모집하고 있습니다.
          </MainBannerText>
          <ButtonWrapper>
            <StyledButton
              onClick={() => {
                window.open('https://forms.gle/FwoDUZSCcHHow8iC7', '_blank');
              }}
            >
              지원하기
            </StyledButton>
          </ButtonWrapper>
          <MainBannerText>11. 22 ~ 12. 19</MainBannerText>
        </RecruitingWrapper>
      </BannerTitleWrapper>
      <LayoutContainer>
        <ContainerInner>
          <MarginPage />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
