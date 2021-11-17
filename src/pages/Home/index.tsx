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
  display: flex;
  flex-direction: row;
`;
export const RecruitingWrapper = styled.div`
  position: absolute;
  top: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StyledRecruting = styled(Recruiting)`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
export const LeftColorLinesWrapper = styled.div`
  transform: scaleX(-1);
  z-index: 1;
  position: absolute;
  top: 350px;
  left: -230px;
`;
export const RightColorLinesWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 350px;
  right: -230px;
`;
export const MarginPage = styled.div`
  height: 1300px;
`;
export const ButtonWrapper = styled.div`
  margin-top: 50px;
`;
export const MainBannerText = styled.div`
  margin-top: 30px;
  color: rgb(139, 149, 161);
`;

export const Home = () => {
  return (
    <>
      <RecruitingWrapper>
        <StyledRecruting />
        <MainBannerText>
          GDSC Daejin Univ. 에서 새로운 식구들을 모집하고 있습니다.
        </MainBannerText>
        <ButtonWrapper>
          <StyledButton>지원하기</StyledButton>
        </ButtonWrapper>
        <MainBannerText>11.29 ~ 12. 05</MainBannerText>
      </RecruitingWrapper>
      <StyledMainBanner>
        <LeftColorLinesWrapper>
          <ColorLines />
        </LeftColorLinesWrapper>
        <RightColorLinesWrapper>
          <ColorLines />
        </RightColorLinesWrapper>
      </StyledMainBanner>
      <LayoutContainer>
        <ContainerInner>
          <MarginPage />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
