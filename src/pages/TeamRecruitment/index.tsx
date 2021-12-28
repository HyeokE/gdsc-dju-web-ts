import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  BannerImage,
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  List,
  SmallTopMargin,
  Tage,
  TopMargin,
} from '../../styles/layouts';
import { MainText, SubTitle, Title } from '../../components/common/Title/title';
import {
  ElementWrapper,
  IntroduceWrapper,
  JoinInner,
  JoinWrapper,
  MinText,
  MinTitle,
  MoblieBottomElementWrapper,
  MoblieTopElementWrapper,
  SectionWrapper,
} from './styled';
import { teamRecruitmentDefaultText } from '../../api/teamRecruitmentDefaultText';
import { StyledButton } from '../../components/common/Button/styled';
import { TeamInfomation } from '../../api/teamInfomation';
import { Banner } from '../../img/Banner/Banner';
import BlueBanner from '../../img/Banner/BlueBanner.png';

export const Recruitment: React.FC = () => {
  const { id } = useParams();
  const aboutTeam = TeamInfomation.find((aboutTeam) => aboutTeam.id === id);
  const navigate = useNavigate();
  return (
    <>
      <BannerWrapper>
        <Banner src={BlueBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>{aboutTeam?.name}</Title>
          <TopMargin />
          <MoblieTopElementWrapper>
            <JoinInner>
              <ElementWrapper>
                <MinTitle>소속</MinTitle>
                <MinText>{aboutTeam?.name}</MinText>
              </ElementWrapper>
              <ElementWrapper>
                <MinTitle>합류과정</MinTitle>
                <MinText>1차 서류 - 2차 면접</MinText>
              </ElementWrapper>
              <ElementWrapper>
                <MinTitle>활동기간</MinTitle>
                <MinText>1년이상</MinText>
              </ElementWrapper>
              <TopMargin />
            </JoinInner>
          </MoblieTopElementWrapper>
          <MainText>열정적인 동료를 얻기 위해 이 자리에 모였습니다.</MainText>
          <MainText>
            우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
          </MainText>
          <TopMargin />
          <SectionWrapper>
            <IntroduceWrapper>
              {aboutTeam?.activity ? (
                <>
                  <SubTitle>합류하시면 함께 할 활동입니다.</SubTitle>
                  {aboutTeam.activity.split('\n').map((line, id) => {
                    return (
                      <List key={id}>
                        <Tage />
                        {line}
                      </List>
                    );
                  })}
                  <TopMargin />
                </>
              ) : null}
              <SubTitle>이런 분을 찾습니다</SubTitle>
              <MainText>
                {teamRecruitmentDefaultText.findMember
                  .split('\n')
                  .map((line, id) => {
                    return (
                      <List key={id}>
                        <Tage />
                        {line}
                      </List>
                    );
                  })}
                {aboutTeam?.people != undefined
                  ? aboutTeam?.people.split('\n').map((line, id) => {
                      return (
                        <List key={id}>
                          <Tage />
                          {line}
                        </List>
                      );
                    })
                  : null}
              </MainText>
              <TopMargin />
              <SubTitle>이런 경험이 있다면 더 좋습니다</SubTitle>
              <MainText>
                {teamRecruitmentDefaultText.goodMember
                  .split('\n')
                  .map((line, id) => {
                    return (
                      <List key={id}>
                        <Tage />
                        {line}
                      </List>
                    );
                  })}
                {aboutTeam?.preferential != undefined
                  ? aboutTeam?.preferential.split('\n').map((line, id) => {
                      return (
                        <List key={id}>
                          <Tage />
                          {line}
                        </List>
                      );
                    })
                  : null}
              </MainText>
              <TopMargin />
              <SubTitle>GDSC의 혜택</SubTitle>
              <MainText>
                {teamRecruitmentDefaultText.benefits
                  .split('\n')
                  .map((line, id) => {
                    return (
                      <List key={id}>
                        <Tage />
                        {line}
                      </List>
                    );
                  })}
              </MainText>
              <TopMargin />
            </IntroduceWrapper>
            <JoinWrapper>
              <JoinInner>
                <ElementWrapper>
                  <MinTitle>소속</MinTitle>
                  <MinText>{aboutTeam?.name}</MinText>
                </ElementWrapper>
                <ElementWrapper>
                  <MinTitle>합류과정</MinTitle>
                  <MinText>1차 서류 - 2차 면접 </MinText>
                </ElementWrapper>
                <ElementWrapper>
                  <MinTitle>활동기간</MinTitle>
                  <MinText>1년이상</MinText>
                </ElementWrapper>
                <TopMargin />
                <StyledButton
                  onClick={() => {
                    window.open(
                      'https://forms.gle/FwoDUZSCcHHow8iC7',
                      '_blank',
                    );
                  }}
                >
                  지원하기
                </StyledButton>
                <StyledButton
                  onClick={() => {
                    navigate('/question');
                  }}
                >
                  자주 하는 질문
                </StyledButton>
                <TopMargin />
              </JoinInner>
            </JoinWrapper>
          </SectionWrapper>
          <MoblieBottomElementWrapper>
            <StyledButton
              onClick={() => {
                navigate('/question');
              }}
            >
              자주 하는 질문
            </StyledButton>
            <StyledButton
              onClick={() => {
                window.open('https://forms.gle/FwoDUZSCcHHow8iC7', '_blank');
              }}
            >
              지원하기
            </StyledButton>
          </MoblieBottomElementWrapper>
        </ContainerInner>
      </LayoutContainer>
      <TopMargin />
    </>
  );
};
