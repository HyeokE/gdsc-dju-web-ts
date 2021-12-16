import React, { useState } from 'react';
import { OnboardingContainer, OnboardingContainerWrapper } from '../styled';
import {
  onboardingAnimate,
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import backArrow from '../../../img/backArrow.png';
import Human1 from '../../../img/onBoardingImg/human_red.svg';
import Human2 from '../../../img/onBoardingImg/human-green.svg';
import Human3 from '../../../img/onBoardingImg/human-blue.svg';
import Human4 from '../../../img/onBoardingImg/human-yellow.svg';
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
import MobileBlock from '../../../components/common/MobileBlock';
import { useRecoilState } from 'recoil';
import { onboardingUserState } from '../../../store/onboardingUser';

const OnboardingMiddle = () => {
  const { id } = useParams();
  const pageData = onBoardingData.find((data) => data.id === id);
  const color = pageData?.color;
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(onboardingUserState);
  const [email, setEmail] = useState<string>('');
  const [nickname, setNickName] = useState('');
  const [major, setMajor] = useState('');
  const [interest, setInterest] = useState('');
  const onChange = (e: any) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'nickname') {
      setNickName(value);
    } else if (name === 'major') {
      setMajor(value);
    } else if (name === 'interest') {
      setInterest(value);
    }
  };
  const onApply = () => {
    const id = pageData?.id;
    if (id === 'email') {
      setUserData({
        ...userData,
        email: email,
      });
    } else if (id === 'nickname') {
      setUserData({
        ...userData,
        nickname: nickname,
      });
    } else if (id === 'major') {
      setUserData({
        ...userData,
        major: major,
      });
    } else if (id === 'interest') {
      setUserData({
        ...userData,
        interest: interest,
      });
    }
  };
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
              name={pageData?.id}
              onChange={onChange}
              color={color}
            />
            <OnboardingMiddleButton
              variants={onboardingAnimate}
              color={color}
              onClick={() => {
                onApply();
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
