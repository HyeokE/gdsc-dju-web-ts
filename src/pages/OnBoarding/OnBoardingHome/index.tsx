import React, { useEffect, useState } from 'react';
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
import '../Onboarding.css';
import Logo from '../../../img/GDSC Logo Clear.png';
import Plane from '../../../img/onBoardingImg/plane-blue.svg';
import { useNavigate } from 'react-router-dom';
import MobileBlock from '../../../components/common/MobileBlock';
import { dbService } from '../../../firebase/firebase';

const OnboardingHome = () => {
  const navigate = useNavigate();

  const [nicknameList, setnickNameList] = useState<any>();
  const [nicknameList1, setnickNameList1] = useState<any>();

  const getNicknameList = async () => {
    try {
      await dbService
        .collection('members')
        .where('name', '==', 'true')
        .get()
        .then((data) => {
          data.docs.map((doc) => setnickNameList(doc.data()));
        });
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getNicknameList();
  }, []);
  console.log(nicknameList);
  // console.log('console: ' + nicknameList1);
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
              <OnboardingDetailText>2021.01.13</OnboardingDetailText>
            </OnboardingDetailWrapper>
            <OnboardingDetailWrapper>
              <OnboardingDetailTitle>Arrival Time</OnboardingDetailTitle>
              <OnboardingDetailText>2022.08</OnboardingDetailText>
            </OnboardingDetailWrapper>
            <OnBoardingButton
              variants={onboardingAnimate}
              onClick={() => {
                navigate('/onboarding/middle/email');
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

export default OnboardingHome;
