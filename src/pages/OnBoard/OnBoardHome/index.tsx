import React from 'react';
import {
  onboardingAnimate,
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import { OnboardingContainer, OnboardingContainerWrapper } from '../styled';
import {
  OnboardingBottomWrapper,
  OnBoardingButton,
  OnboardingDetailText,
  OnboardingDetailTitle,
  OnboardingDetailWrapper,
  OnboardingLogo,
  OnboardingPlaceWrapper,
  OnboardingSubTitle,
  OnboardingTitle,
  OnboardingTitleWrapper,
  OnboardingTopLogoWrapper,
  OnboardingTopText,
  OnboardingTravel,
  OnboardingTravelImage,
  OnboardingTravelWrapper,
} from './styled';
import '../Onboard.css';
import Logo from '../../../img/GDSCLogo.svg';
import Plane from '../../../img/onBoardingImg/plane-blue.svg';
import { useNavigate } from 'react-router-dom';
import { getCurrentDate } from '../../../store/hooks/getCurrentDate';

const OnboardHome = () => {
  const navigate = useNavigate();
  return (
    <OnboardingContainerWrapper>
      {/*<MobileBlock />*/}
      <OnboardingContainer
        initial="start"
        animate="end"
        exit="out"
        variants={pageTransitionAnimate}
        transition={pageAnimate}
      >
        <OnboardingTopLogoWrapper variants={onboardingAnimate}>
          <OnboardingLogo src={Logo} />
          <OnboardingTopText>Google Developer Student Clubs</OnboardingTopText>
        </OnboardingTopLogoWrapper>
        <OnboardingTitleWrapper>
          <OnboardingTitle variants={onboardingAnimate}>
            GDSC DJU
          </OnboardingTitle>
          <OnboardingTitle variants={onboardingAnimate}>
            Member Onboarding
          </OnboardingTitle>
        </OnboardingTitleWrapper>
        <OnboardingBottomWrapper>
          <OnboardingSubTitle variants={onboardingAnimate}>
            Boarding Details
          </OnboardingSubTitle>
          <OnboardingTravelWrapper variants={onboardingAnimate}>
            <OnboardingPlaceWrapper>
              <OnboardingTravel>NWB</OnboardingTravel>
              <OnboardingTravelImage src={Plane} />
              <OnboardingTravel>DJU</OnboardingTravel>
            </OnboardingPlaceWrapper>
            <OnboardingDetailWrapper>
              <OnboardingDetailTitle>Season</OnboardingDetailTitle>
              <OnboardingDetailText>1th</OnboardingDetailText>
            </OnboardingDetailWrapper>
            <OnboardingDetailWrapper>
              <OnboardingDetailTitle>Boarding Time</OnboardingDetailTitle>
              <OnboardingDetailText>{getCurrentDate()}</OnboardingDetailText>
            </OnboardingDetailWrapper>
            <OnboardingDetailWrapper>
              <OnboardingDetailTitle>Arrival Time</OnboardingDetailTitle>
              <OnboardingDetailText>2022.08</OnboardingDetailText>
            </OnboardingDetailWrapper>
            <OnBoardingButton
              variants={onboardingAnimate}
              onClick={() => {
                navigate('/onboard/middle/email');
              }}
            >
              시작하기
            </OnBoardingButton>
          </OnboardingTravelWrapper>
        </OnboardingBottomWrapper>
      </OnboardingContainer>
    </OnboardingContainerWrapper>
  );
};

export default OnboardHome;
