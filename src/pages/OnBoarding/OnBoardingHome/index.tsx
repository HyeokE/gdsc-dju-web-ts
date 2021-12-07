import React from 'react';
import {
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import { OnboardingContainer } from '../styled';
import {
  OnboardingBottomWrapper,
  OnBoardingButton,
  OnboardingDetailText,
  OnboardingDetailTitle,
  OnboardingDetailWrapper,
  OnboardingLogo,
  OnboardingSubTitle,
  OnboardingTitle,
  OnboardingTitleWrapper,
  OnboardingTopLogoWrapper,
  OnboardingTopText,
  OnboardingTravel,
  OnboardingTravelImage,
  OnboardingTravelWrapper,
} from './styled';
import '../Onboarding.css';
import Logo from '../../../img/GDSC Logo Clear.png';
import Plane from '../../../img/plane.png';
import { useNavigate } from 'react-router-dom';

const OnboardingHome = () => {
  const navigate = useNavigate();
  return (
    <OnboardingContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageTransitionAnimate}
      transition={pageAnimate}
    >
      <OnboardingTopLogoWrapper>
        <OnboardingLogo src={Logo} />
        <OnboardingTopText>Google Developer Student Clubs</OnboardingTopText>
      </OnboardingTopLogoWrapper>
      <OnboardingTitleWrapper>
        <OnboardingTitle>GDSC DJU</OnboardingTitle>
        <OnboardingTitle>Member Onboarding</OnboardingTitle>
      </OnboardingTitleWrapper>
      <OnboardingBottomWrapper>
        <OnboardingSubTitle>Boarding Details</OnboardingSubTitle>
        <OnboardingTravelWrapper>
          <OnboardingTravel>NWB</OnboardingTravel>
          <OnboardingTravelImage src={Plane} />
          <OnboardingTravel>DJU</OnboardingTravel>
          <OnboardingDetailWrapper>
            <OnboardingDetailTitle>Season</OnboardingDetailTitle>
            <OnboardingDetailText>1th</OnboardingDetailText>
          </OnboardingDetailWrapper>
          <OnboardingDetailWrapper>
            <OnboardingDetailTitle>Boarding Time</OnboardingDetailTitle>
            <OnboardingDetailText>2021.01.13</OnboardingDetailText>
          </OnboardingDetailWrapper>
          <OnboardingDetailWrapper>
            <OnboardingDetailTitle>Arrival Time</OnboardingDetailTitle>
            <OnboardingDetailText>2022.08</OnboardingDetailText>
          </OnboardingDetailWrapper>
          <OnBoardingButton
            onClick={() => {
              navigate('/onboarding/middle/1');
            }}
          >
            시작하기
          </OnBoardingButton>
        </OnboardingTravelWrapper>
      </OnboardingBottomWrapper>
    </OnboardingContainer>
  );
};

export default OnboardingHome;
