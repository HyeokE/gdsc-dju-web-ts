import React from 'react';
import {
  onboardingAnimate,
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import {
  OnboardingBackArrow,
  OnboardingBackText,
  OnboardingBackWrapper,
  OnboardingDescription,
  OnboardingMiddleButton,
  OnboardingMiddleImage,
} from '../OnboardingMiddle/styled';
import backArrow from '../../../img/backArrow.png';
import {
  OnboardingTitle,
  OnboardingTitleWrapper,
} from '../OnBoardingHome/styled';
import Human5 from '../../../img/Humen/Human5.png';

import { OnboardingContainer } from '../styled';
import { useNavigate } from 'react-router-dom';

import OnboardingLinkBox from '../../../components/common/OnboardingLinkBox';
import { OnboardingLinkBoxWrapper } from './styled';

const OnBoardingLinks = () => {
  const navigate = useNavigate();
  const Link = [
    { id: 'slack', link: '' },
    { id: 'discord', link: '' },
    { id: 'notion', link: '' },
  ];
  return (
    <div>
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
              Almost There
            </OnboardingTitle>
          </OnboardingTitleWrapper>
          <OnboardingDescription variants={onboardingAnimate}>
            저희는 다음 서비스들을 이용해서 소통해요. 아래 링크를 눌러서 하나씩
            가입을 진행해주세요!
          </OnboardingDescription>
          <OnboardingLinkBoxWrapper variants={onboardingAnimate}>
            {Link.map((data, id) => (
              <OnboardingLinkBox key={id} name={data.id} />
            ))}
          </OnboardingLinkBoxWrapper>
          <OnboardingMiddleButton
            variants={onboardingAnimate}
            onClick={() => {
              navigate('/onboarding/middle/ticket');
            }}
            style={{ color: '#262626' }}
          >
            다음으로
          </OnboardingMiddleButton>
        </>
        <OnboardingMiddleImage variants={onboardingAnimate} src={Human5} />
      </OnboardingContainer>
    </div>
  );
};

export default OnBoardingLinks;
