import React from 'react';
import { ContainerInner, LayoutContainer, TopMargin } from '../../Layout';
import { MainText, Title } from '../../components/common/Title/title';
import { VideoWrapper, StyledVideo } from './styled';
import styled from 'styled-components';
import Recruiting from '../../img/Recruiting';
import ColorLines from '../../img/ColorLines';

const StyledTitleWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledButton = styled.button`
  width: 220px;
  height: 60px;
  border-radius: 75px;
  border-style: solid;
  background: #4385f3;
  border-width: 0px;
  color: white;
  font-size: 16px;
`;
export const StyledMainBanner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  height: 1300px;
  z-index: 1;
`;
export const BannerTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RecruitingWrapper = styled.div`
  z-index: 50;
  position: absolute;
  top: 500px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    top: 300px;
    width: 60%;
  }
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    top: 200px;
    width: 70%;
  }
  @media (max-width: 320px) {
    top: 200px;
    width: 80%;
  }
`;

export const LeftColorLinesWrapper = styled.div`
  transform: scaleX(-1);
  z-index: 1;
  position: absolute;
  width: 500px;
  top: 350px;
  left: -230px;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    top: 200px;
    width: 400px;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
export const RightColorLinesWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 350px;
  width: 500px;
  right: -230px;

  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    top: 200px;
    width: 400px;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
export const MarginPage = styled.div`
  height: 1300px;
`;
export const ButtonWrapper = styled.div`
  margin-top: 50px;
`;
export const MainBannerText = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 23px;
  color: rgb(139, 149, 161);
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    font-size: 20px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
`;

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
            <StyledButton>지원기간이 아닙니다.</StyledButton>
          </ButtonWrapper>
          <MainBannerText>11.29 ~ 12. 05</MainBannerText>
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
