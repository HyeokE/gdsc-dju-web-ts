import React from 'react';
import {
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import { OnboardingContainer } from '../styled';

const OnboardingHome = () => {
  return (
    <OnboardingContainer
      initial="initial"
      animate="in"
      exit="out"
      variants={pageTransitionAnimate}
      transition={pageAnimate}
    >
      Home adasdasdas adasda
    </OnboardingContainer>
  );
};

export default OnboardingHome;
