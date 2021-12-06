import React from 'react';
import { ContainerInner, LayoutContainer } from '../../Layout';
import {
  BannerTitleWrapper,
  ButtonWrapper,
  DownArrowWrapper,
  HomeWrapper,
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
import {
  bannerItemAnimate,
  homeBannerAnimate,
  leftLineItemAnimate,
  listAnimate,
  rightLineItemAnimate,
  titleAnimate,
  titleItemAnimate,
} from '../../components/common/Variants/Variants';
import DownArrow from '../../img/DownArrow';
import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <>
      <HomeWrapper
        variants={homeBannerAnimate}
        initial={'start'}
        animate={'end'}
      >
        <StyledMainBanner
          variants={titleAnimate}
          initial={'start'}
          animate={'end'}
        >
          <LeftColorLinesWrapper variants={leftLineItemAnimate}>
            <ColorLines />
          </LeftColorLinesWrapper>
          <RightColorLinesWrapper variants={rightLineItemAnimate}>
            <ColorLines />
          </RightColorLinesWrapper>
        </StyledMainBanner>
        <BannerTitleWrapper>
          <RecruitingWrapper variants={bannerItemAnimate}>
            <Recruiting />
            <MainBannerText variants={bannerItemAnimate}>
              GDSC Daejin Univ. 에서 새로운 식구들을 모집하고 있습니다.
            </MainBannerText>
            <ButtonWrapper variants={bannerItemAnimate}>
              <StyledButton
                onClick={() => {
                  window.open('https://forms.gle/FwoDUZSCcHHow8iC7', '_blank');
                }}
              >
                지원하기
              </StyledButton>
            </ButtonWrapper>
            <MainBannerText variants={bannerItemAnimate}>
              11. 22 ~ 12. 19
            </MainBannerText>
          </RecruitingWrapper>
        </BannerTitleWrapper>
        <DownArrowWrapper
          animate={{
            y: [0, 10, 0, 10, 0],
            opacity: [1, 0, 1, 0, 1],
          }}
          transition={{
            duration: 4,
            ease: 'easeInOut',
            times: [0, 0.3, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
        >
          <DownArrow />
        </DownArrowWrapper>
      </HomeWrapper>

      {/*<hr />*/}
      <LayoutContainer>
        <ContainerInner>
          <MarginPage />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
