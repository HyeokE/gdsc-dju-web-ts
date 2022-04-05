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
import Recruiting from '../../img/Recruiting';
import ColorLines from '../../img/ColorLines';
import {
  bannerItemAnimate,
  homeBannerAnimate,
  leftLineItemAnimate,
  rightLineItemAnimate,
  titleAnimate,
} from '../../components/common/Variants/Variants';
import DownArrow from '../../img/DownArrow';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../store/recruitHandler';
import SectionIntroduce from '../../components/Home/SectionIntroduce';
import HomeBackground from '../../components/Home/HomeBackground';
import SectionTimeLine from '../../components/Home/SectionTimeLine';
import SectionManager from '../../components/Home/SectionManager';
import SectionGoal from '../../components/Home/SectionGoal';

const Home = () => {
  const [recruit] = useRecoilState(recruitmentState);
  const banner = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref}>
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
        <BannerTitleWrapper ref={banner}>
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
      <SectionIntroduce />
      <SectionGoal />
      <SectionTimeLine />
      <SectionManager />
    </div>
  );
};
export default Home;
