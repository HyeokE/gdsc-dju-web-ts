import React from 'react';
import { OnboardingContainer, OnboardingContainerWrapper } from '../styled';
import BoardingPass from '../../../components/common/BoardingPass';
import {
  onboardingAnimate,
  onboardingTicketAnimate,
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import {
  BoardingPassWrapper,
  BoardingTicketLogoImage,
  BoardingTicketLogoText,
  BoardingTicketLogoWrapper,
  BoardingTicketSubTitle,
  BoardingTicketTitle,
  BoardingTicketWrapper,
  ElementJustifyCenter,
} from './styled';
import Logo from '../../../img/GDSC Logo Clear.png';

const OnboardingTicket = () => {
  return (
    <OnboardingContainerWrapper>
      <OnboardingContainer
        initial="start"
        animate="end"
        exit="out"
        variants={onboardingTicketAnimate}
        transition={pageAnimate}
      >
        <BoardingTicketWrapper>
          <BoardingTicketLogoWrapper variants={onboardingAnimate}>
            <BoardingTicketLogoImage src={Logo} />
            <BoardingTicketLogoText>
              Google Developer Student Clubs
            </BoardingTicketLogoText>
          </BoardingTicketLogoWrapper>
          <ElementJustifyCenter variants={onboardingAnimate}>
            <BoardingTicketTitle>Welcome aboard!</BoardingTicketTitle>
          </ElementJustifyCenter>
          <ElementJustifyCenter variants={onboardingAnimate}>
            <BoardingTicketSubTitle style={{ marginTop: '25px' }}>
              1기 멤버가 되신 것을 환영합니다. 이제 활동을 시작해주시면 됩니다.
            </BoardingTicketSubTitle>
          </ElementJustifyCenter>
          <ElementJustifyCenter>
            <BoardingTicketSubTitle variants={onboardingAnimate}>
              간단하게 Slack, Discord 에서 환영인사를 나눠보세요!
            </BoardingTicketSubTitle>
          </ElementJustifyCenter>
          <ElementJustifyCenter>
            <BoardingPassWrapper variants={onboardingTicketAnimate}>
              <BoardingPass />
            </BoardingPassWrapper>
          </ElementJustifyCenter>
        </BoardingTicketWrapper>
      </OnboardingContainer>
    </OnboardingContainerWrapper>
  );
};

export default OnboardingTicket;
