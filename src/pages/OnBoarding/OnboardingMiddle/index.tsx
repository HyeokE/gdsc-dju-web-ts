import React from 'react';
import { OnboardingContainer } from '../styled';
import {
  onboardingAnimate,
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import backArrow from '../../../img/backArrow.png';
import human1 from '../../../img/humaaan-1.png';
import {
  OnboardingBackArrow,
  OnboardingBackText,
  OnboardingBackWrapper,
  OnboardingDescription,
  OnboardingInnerWrapper,
  OnboardingInput,
} from './styled';
import './OnboardingMiddle.css';
import {
  OnboardingTitle,
  OnboardingTitleWrapper,
} from '../OnBoardingHome/styled';
import { useNavigate } from 'react-router-dom';

const OnboardingMiddle = () => {
  const color = '#E94436';
  const navigate = useNavigate();
  return (
    <OnboardingContainer
      initial="start"
      animate="end"
      exit="out"
      variants={pageTransitionAnimate}
      transition={pageAnimate}
    >
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
        <OnboardingTitle variants={onboardingAnimate}>Tell us</OnboardingTitle>
        <OnboardingInnerWrapper variants={onboardingAnimate}>
          <OnboardingTitle>Your</OnboardingTitle>
          <OnboardingTitle style={{ marginLeft: '20px', color: color }}>
            Email Address
          </OnboardingTitle>
        </OnboardingInnerWrapper>
      </OnboardingTitleWrapper>
      <OnboardingDescription variants={onboardingAnimate}>
        지원서에 적어주신 이메일을 입력해주세요
      </OnboardingDescription>
      <OnboardingInput
        variants={onboardingAnimate}
        placeholder={'구글이메일 주소'}
        style={{ borderColor: color, caretColor: color }}
      />
    </OnboardingContainer>
  );
};

export default OnboardingMiddle;
