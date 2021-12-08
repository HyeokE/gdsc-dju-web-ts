import React from 'react';
import { OnboardingContainer } from '../styled';
import BoardingPass from '../../../components/common/BoardingPass';
import {
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';

const OnboardingTicket = () => {
  return (
    <OnboardingContainer
      initial="start"
      animate="end"
      exit="out"
      variants={pageTransitionAnimate}
      transition={pageAnimate}
    >
      <BoardingPass />
    </OnboardingContainer>
  );
};

export default OnboardingTicket;
