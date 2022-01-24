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

const Home = () => {
  const [recruit] = useRecoilState(recruitmentState);
  const banner = useRef<HTMLDivElement>(null);
  console.log(banner.current?.offsetTop);
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
                    window.open(
                      'https://forms.gle/FwoDUZSCcHHow8iC7',
                      '_blank',
                    );
                  }}
                >
                  지원하기
                </StyledRecruitmentButton>
              ) : (
                <StyledRecruitmentButton>
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
    </>
  );
};
export default Home;
