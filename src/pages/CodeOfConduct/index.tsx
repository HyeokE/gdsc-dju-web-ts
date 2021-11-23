import React from 'react';

import {
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  List,
  Tage,
  TopMargin,
  BannerImage,
} from '../../Layout';
import { MainText, SubTitle, Title } from '../../components/common/Title/title';
import RedBanner from '../../img/RedBanner.png';
import GreenBanner from '../../img/GreenBanner.png';

export const CodeOfConduct = () => {
  return (
    <>
      <BannerWrapper>
        <BannerImage src={RedBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>Code of Conduct</Title>
          <TopMargin />
          <SubTitle>사람을 존중해주세요.</SubTitle>
          <MainText>
            <List>
              <Tage />
              모든 일 뒤에는 사람이 있습니다.
            </List>
            <List>
              <Tage />
              모든 일 뒤에는 사람이 있습니다.
            </List>
            <List>
              <Tage />
              모두가 커뮤니티에 참여할 수 있어야합니다.
            </List>
            <List>
              <Tage />
              다른 사람의 가치관, 문화, 일을 존중해주세요.
            </List>
          </MainText>
          <TopMargin />
          <SubTitle>사람에게 친절하게 대해주세요.</SubTitle>
          <MainText>
            <List>
              <Tage />
              사람을 정중하게 대해주세요.
            </List>
            <List>
              <Tage />
              새로운 사람에게 친절하게 대해주세요.
            </List>
            <List>
              <Tage />
              어떤 질문에도 친절하게 대해주세요.
            </List>
          </MainText>
          <TopMargin />
          <SubTitle>다른 사람의 이야기를 잘 들어주세요.</SubTitle>
          <MainText>
            <List>
              <Tage />
              모든 사람들의 의견을 잘 들어주세요.
            </List>
            <List>
              <Tage />
              모든 사람에게는 발언권이 있고, 모두가 말할 권리가 있습니다.
            </List>
          </MainText>
          <TopMargin />
          <SubTitle>적극적으로 참여해주세요.</SubTitle>
          <MainText>
            <List>
              <Tage />
              적극적인 참여는 서로의 거리를 줄이고 보다 큰 가치를 만들어 냅니다.
            </List>
            <List>
              <Tage />
              적극적으로 참여하며 조화롭게 어울려주세요.
            </List>
          </MainText>
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
