import React, { useRef } from 'react';
import {
  BannerTitleWrapper,
  ButtonWrapper,
  DownArrowWrapper,
  HomeWrapper,
  LeftColorLinesWrapper,
  MainBannerText,
  RecruitingWrapper,
  RightColorLinesWrapper,
  StyledMainBanner,
  StyledRecruitmentButton,
} from './styled';
import Recruiting from '../../assets/Recruiting';
import ColorLines from '../../assets/ColorLines';
import {
  bannerItemAnimate,
  homeBannerAnimate,
  leftLineItemAnimate,
  rightLineItemAnimate,
  titleAnimate,
} from '../../components/common/Variants/Variants';
import DownArrow from '../../assets/DownArrow';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../store/recruitHandler';
import SectionIntroduce from '../../components/Home/SectionIntroduce';
import SectionTimeLine from '../../components/Home/SectionTimeLine';
import SectionManager from '../../components/Home/SectionManager';
import SectionGoal from '../../components/Home/SectionGoal';
import { TopMargin } from '../../styles/layouts';
import styled from 'styled-components';
import HomePage from '../../components/Home/HomePage';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const HomeContainer = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
    display: none;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Parallax speed={-50}>
        <HomePage />
      </Parallax>
      <Parallax speed={20}>
        <SectionIntroduce />
      </Parallax>
      <TopMargin />
      <SectionGoal />
      <TopMargin />
      <SectionTimeLine />
      <TopMargin />
      <SectionManager />
    </HomeContainer>
  );
};
export default Home;
