import React from 'react';
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
} from '../../pages/Home/styled';
import {
  bannerItemAnimate,
  homeBannerAnimate,
  leftLineItemAnimate,
  rightLineItemAnimate,
  titleAnimate,
} from '../common/Variants/Variants';
import ColorLines from '../../assets/ColorLines';
import Recruiting from '../../assets/Recruiting';
import DownArrow from '../../assets/DownArrow';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../store/recruitHandler';

const HomePage = () => {
  const [recruit] = useRecoilState(recruitmentState);
  return (
    <HomeWrapper variants={homeBannerAnimate} initial={'start'} animate={'end'}>
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
            {recruit.home ? (
              <StyledRecruitmentButton
                onClick={() => {
                  window.open('https://gdsc-dju.web.app/recruit', '_blank');
                }}
              >
                지원하기
              </StyledRecruitmentButton>
            ) : (
              <StyledRecruitmentButton disable={true}>
                지원기간이 아닙니다.
              </StyledRecruitmentButton>
            )}
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
  );
};

export default HomePage;
