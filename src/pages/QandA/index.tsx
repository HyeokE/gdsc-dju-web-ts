import React from 'react';
import { MainText, SubTitle, Title } from '../../components/common/Title/title';
import { YellowBanner } from '../../img/Banner';

import {
  BannerWrapper,
  ContainerInner,
  List,
  Tage,
  TopMargin,
} from '../../Layout';
import { LayoutContainer } from '../../styles/layout';

export const Question = () => {
  return (
    <>
      <BannerWrapper>
        <YellowBanner />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>자주 하는 질문</Title>
          <TopMargin />
          <SubTitle>비전공자도 가능한가요?</SubTitle>
          <MainText>
            <List>
              <Tage />네 가능합니다. 재학생, 휴학생이시라면 누구나
              지원가능합니다.
            </List>
          </MainText>
          <TopMargin />
          <SubTitle>대학원생도 지원이 가능한가요?</SubTitle>
          <MainText>
            <List>
              <Tage />
              아뇨. 재.휴학생 대상입니다.
            </List>
          </MainText>
          <TopMargin />
          <SubTitle>코세라, qwiklab 바우처는 무엇인가요?</SubTitle>
          <MainText>
            <List>
              <Tage />
              구글에서 제공하는 강의입니다.
            </List>
          </MainText>
          <TopMargin />
          <SubTitle>코딩 교육과정이 있는건가요?</SubTitle>
          <MainText>
            <List>
              <Tage />
              개발 커뮤니티로서 교육을 직접적으로 진행하지는 않습니다. 스터디
              팀별로 지식을 공유하거나 여러 활동을 통해 좋은 시너지를 주는데에
              목적이 있습니다.
              <br />
              그러나 git 사용이나 학습에 필요한 가이드라인 정도는
              제공해드립니다.
            </List>
          </MainText>
          <TopMargin />
          <SubTitle>정해진 시간에 활동해야하나요?</SubTitle>
          <MainText>
            <List>
              <Tage />
              정기세미나는 2주마다 월요일 밤 9시에 진행되며 스터디는 팀별로
              조율하여 매주 진행 중입니다.
              <br />
              정기세미나와 스터디 외에 다른 활동은 자율입니다.
            </List>
          </MainText>
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
