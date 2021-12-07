import React from 'react';
import { OnboardingContainer } from '../styled';
import {
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';

const OnboardingMiddle = () => {
  return (
    <OnboardingContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageTransitionAnimate}
      transition={pageAnimate}
    >
      middle
    </OnboardingContainer>
  );
};

export default OnboardingMiddle;
