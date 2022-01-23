import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';
import { MainText, SubTitle, Title } from '../../components/common/Title/title';
import {
  IntroduceWrapper,
  JoinInner,
  JoinWrapper,
  MoblieBottomElementWrapper,
  MoblieTopElementWrapper,
  SectionWrapper,
} from './styled';
import { recruitDefaultText } from '../../api/pageData/recruitDefaultText';
import { StyledButton } from '../../components/common/Button/styled';
import { RecruitDetails } from '../../api/pageData/recruitDetails';
import { Banner } from '../../img/Banner/Banner';
import BlueBanner from '../../img/Banner/BlueBanner.png';
import BulletList from '../../components/common/BulletList';
import InformationBar from './InformationBar';
import RecruitFaqButton from './RecruitFaqButton';

export const Recruitment: React.FC = () => {
  const { id } = useParams();
  const aboutTeam = RecruitDetails.find((aboutTeam) => aboutTeam.id === id);
  const navigate = useNavigate();
  return (
    <>
      <BannerWrapper>
        <Banner src={BlueBanner} />
      </BannerWrapper>
      {aboutTeam && (
        <LayoutContainer>
          <ContainerInner>
            <TopMargin />
            <Title>{aboutTeam?.name}</Title>
            <TopMargin />
            <MoblieTopElementWrapper>
              <JoinInner>
                <InformationBar name={aboutTeam.name} />
                <TopMargin />
              </JoinInner>
            </MoblieTopElementWrapper>
            <MainText>열정적인 동료를 얻기 위해 이 자리에 모였습니다.</MainText>
            <MainText>
              우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
            </MainText>
            <TopMargin />
            <SectionWrapper>
              {aboutTeam && (
                <IntroduceWrapper>
                  {aboutTeam.activity ? (
                    <>
                      <SubTitle>합류하시면 함께 할 활동입니다.</SubTitle>
                      <BulletList text={aboutTeam.activity} />
                      <TopMargin />
                    </>
                  ) : null}
                  <SubTitle>이런 분을 찾습니다</SubTitle>
                  <MainText>
                    <BulletList text={recruitDefaultText.findMember} />
                    {aboutTeam.people && <BulletList text={aboutTeam.people} />}
                  </MainText>
                  <TopMargin />
                  <SubTitle>이런 경험이 있다면 더 좋습니다</SubTitle>
                  <MainText>
                    <BulletList text={recruitDefaultText.goodMember} />
                    {aboutTeam.preferential && (
                      <BulletList text={aboutTeam.preferential} />
                    )}
                  </MainText>
                  <TopMargin />
                  <SubTitle>GDSC의 혜택</SubTitle>
                  <MainText>
                    <BulletList text={recruitDefaultText.benefits} />
                  </MainText>
                  <TopMargin />
                </IntroduceWrapper>
              )}
              <JoinWrapper>
                <JoinInner>
                  <InformationBar name={aboutTeam.name} />
                  <TopMargin />
                  <RecruitFaqButton name={id as string} />
                  <TopMargin />
                </JoinInner>
              </JoinWrapper>
            </SectionWrapper>
            <MoblieBottomElementWrapper>
              <RecruitFaqButton name={id as string} />
            </MoblieBottomElementWrapper>
          </ContainerInner>
        </LayoutContainer>
      )}
      <TopMargin />
    </>
  );
};
