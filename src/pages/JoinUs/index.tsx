import React from 'react';
import { LayoutContainer, List, Tage, TopMargin } from '../../Layout';
import { MainText, SubTitle } from '../../common/Title/title';
import { BannerImage } from '../Introduce/styled';

export const JoinUs = () => {
  return (
    <>
      <BannerImage src={process.env.PUBLIC_URL + 'BlueBanner.png'} />
      <LayoutContainer>
        <div>
          <TopMargin />
          <SubTitle>이런 분을 찾습니다</SubTitle>
          <MainText>
            <List>
              <Tage />
              책임감 있는 사람
            </List>
            <List>
              <Tage />
              주도적으로 의견을 얘기하거나 반박할 수 있는 사람
            </List>
            <List>
              <Tage />
              동료들에게 좋은 시너지를 줄 수 있는 사람
            </List>
            <List>
              <Tage />
              타인의 의견을 적극적으로 수용하고 개선하려고 노력하는 사람
            </List>
          </MainText>
          <TopMargin />
          <SubTitle>이런 경험이 있다면 더 좋습니다</SubTitle>
          <MainText>
            <List>
              <Tage />
              Github, git에 대한 경험이나 프로젝트 경험이 있는 분이면 좋습니다.
            </List>
            <List>
              <Tage />
              FrameWork나 Library 사용이 능숙하신 분이면 좋습니다.
            </List>
            <List>
              <Tage />
              React, Android, Spring에 관한 이해도가 높으신 분이면 좋습니다.
            </List>
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
        </div>
        <TopMargin />
      </LayoutContainer>
    </>
  );
};
