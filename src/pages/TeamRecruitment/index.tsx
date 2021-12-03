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
} from '../../Layout';
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

import { StyledButton } from '../../components/common/Button/styled';
import { TeamInfomation } from '../../api/teamInfomation';
import { YellowBanner } from '../../img/Banner';

export const Recuritment: React.FC = () => {
  const { id } = useParams();
  const aboutTeam = TeamInfomation.find((aboutTeam) => aboutTeam.id === id);
  const navigate = useNavigate();
  return (
    <>
      <BannerWrapper>
        <YellowBanner />
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
              <SubTitle>이런 분을 찾습니다</SubTitle>
              <MainText>
                <List>
                  <Tage />
                  코딩에 대한 남다른 애정을 가지신 분
                </List>
                <List>
                  <Tage />
                  1년이상 활동이 가능하신 분
                </List>
                <List>
                  <Tage />
                  책임감이 있으신 분
                </List>
                <List>
                  <Tage />
                  주도적으로 의견을 얘기하거나 반박하는데 거리낌이 없으신 분
                </List>
                <List>
                  <Tage />
                  동료들에게 좋은 시너지를 줄 수 있으신 분
                </List>
                <List>
                  <Tage />
                  타인의 의견을 적극적으로 수용하고 개선하려고 노력하시는 분
                </List>
                <List>
                  <Tage />
                  프로젝트의 애정과 책임을 가지고 주도적으로 개발, 개선할 수
                  있으신 분
                </List>
                <List>
                  <Tage />
                  커뮤니케이션 및 개발 문서 정리에 능숙하신 분
                </List>
                <List>
                  <Tage />
                  코딩에 대하여 잘 모르더라도 매일 학습하고, 모르는 게 있으면
                  주도적으로 해결할 수 있으신 분
                </List>
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
                <List>
                  <Tage />
                  Github, git에 대한 경험이나 프로젝트 경험이 있는 분이면
                  좋습니다.
                </List>
                <List>
                  <Tage />
                  FrameWork나 Library 사용이 능숙하신 분이면 좋습니다.
                </List>

                <List>
                  <Tage />
                  코딩에 대하여 잘 모르더라도 매일 학습하실 의지를 가지신 분이면
                  좋습니다.
                </List>
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
                <List>
                  <Tage />
                  여러 국가의 GDSC 및 GDSC Korea와의 커뮤니케이션
                </List>
                <List>
                  <Tage />
                  GDG 개발자와의 컨택 기회
                </List>
                <List>
                  <Tage />
                  google에서 지원하는 소소한 기념품
                </List>
                <List>
                  <Tage />
                  자체 스터디를 위한 google의 코세라, 퀵랩 바우처 지급
                </List>
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
