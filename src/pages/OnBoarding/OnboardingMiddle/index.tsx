import React from 'react';
import {
  MobileText,
  OnboardingContainer,
  OnboardingContainerWrapper,
} from '../styled';
import {
  onboardingAnimate,
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import backArrow from '../../../img/backArrow.png';
import Human1 from '../../../img/Humen/Human1.png';
import Human2 from '../../../img/Humen/Human2.png';
import Human3 from '../../../img/Humen/Human3.png';
import Human4 from '../../../img/Humen/Human4.png';
import {
  OnboardingBackArrow,
  OnboardingBackText,
  OnboardingBackWrapper,
  OnboardingDescription,
  OnboardingImageWrapper,
  OnboardingInnerWrapper,
  OnboardingInput,
  OnboardingMiddleButton,
  OnboardingMiddleElementWrapper,
  OnboardingMiddleImage,
} from './styled';
import './OnboardingMiddle.css';
import {
  OnboardingTitle,
  OnboardingTitleWrapper,
} from '../OnBoardingHome/styled';
import { onBoardingData } from '../../../api/onBoarding';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { OnboardingMiddleTextWrapper } from '../OnboardingTicket/styled';
import BoardingPass from '../../../components/common/BoardingPass';

const OnboardingMiddle = () => {
  const { id } = useParams();
  const pageData = onBoardingData.find((data) => data.id === id);
  const color = pageData?.color;

  const navigate = useNavigate();
  return (
    <OnboardingContainerWrapper>
      <MobileText>
        PC 환경에 최적화 되어 있습니다. PC 에서 다시 실행해주세요!
      </MobileText>
      <OnboardingContainer
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      >
        <OnboardingMiddleElementWrapper>
          <OnboardingMiddleTextWrapper>
            <OnboardingBackWrapper
              variants={onboardingAnimate}
              onClick={() => {
                navigate(-1);
              }}
            >
              <OnboardingBackArrow src={backArrow} />
              <OnboardingBackText>Back</OnboardingBackText>
            </OnboardingBackWrapper>
            <OnboardingTitleWrapper>
              <OnboardingTitle variants={onboardingAnimate}>
                Tell us
              </OnboardingTitle>
              <OnboardingInnerWrapper variants={onboardingAnimate}>
                <OnboardingTitle>Your</OnboardingTitle>
                <OnboardingTitle style={{ marginLeft: '20px', color: color }}>
                  {pageData?.title}
                </OnboardingTitle>
              </OnboardingInnerWrapper>
            </OnboardingTitleWrapper>
            <OnboardingDescription variants={onboardingAnimate}>
              {pageData?.subTitle}
            </OnboardingDescription>
            <OnboardingInput
              variants={onboardingAnimate}
              placeholder={pageData?.placeHolder}
              style={{ borderColor: color, caretColor: color, color: color }}
            />
            <OnboardingMiddleButton
              variants={onboardingAnimate}
              style={{ background: color }}
              onClick={() => {
                navigate('/onboarding/' + pageData?.next);
              }}
            >
              다음으로
            </OnboardingMiddleButton>
          </OnboardingMiddleTextWrapper>
          <OnboardingImageWrapper>
            <OnboardingMiddleImage
              variants={onboardingAnimate}
              src={
                pageData?.id === 'email'
                  ? Human1
                  : pageData?.id === 'englishname'
                  ? Human2
                  : pageData?.id === 'major'
                  ? Human3
                  : pageData?.id === 'interest'
                  ? Human4
                  : ''
              }
            />
          </OnboardingImageWrapper>
        </OnboardingMiddleElementWrapper>
      </OnboardingContainer>
    </OnboardingContainerWrapper>
  );
};

export default OnboardingMiddle;
