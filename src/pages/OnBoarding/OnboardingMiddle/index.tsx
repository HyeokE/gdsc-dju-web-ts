import React from 'react';
import { OnboardingContainer } from '../styled';
import {
  onboardingAnimate,
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import backArrow from '../../../img/backArrow.png';
import Human1 from '../../../img/Human1.png';
import Human2 from '../../../img/Human2.png';
import Human3 from '../../../img/Human3.png';
import Human4 from '../../../img/Human4.png';
import {
  OnboardingBackArrow,
  OnboardingBackText,
  OnboardingBackWrapper,
  OnboardingDescription,
  OnboardingInnerWrapper,
  OnboardingInput,
  OnboardingMiddleButton,
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

const OnboardingMiddle = () => {
  const { id } = useParams();
  const pageData = onBoardingData.find((data) => data.id === id);
  const color = pageData?.color;

  const navigate = useNavigate();
  return (
    <OnboardingContainer
      initial="start"
      animate="end"
      exit="out"
      variants={pageTransitionAnimate}
      transition={pageAnimate}
    >
      <>
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
          style={{ borderColor: color, caretColor: color }}
        />
        <OnboardingMiddleButton
          variants={onboardingAnimate}
          style={{ background: color }}
          onClick={() => {
            navigate('/onboarding/middle/' + pageData?.next);
          }}
        >
          다음으로
        </OnboardingMiddleButton>
      </>
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
    </OnboardingContainer>
  );
};

export default OnboardingMiddle;
