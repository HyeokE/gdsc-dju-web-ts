import React, { useRef } from 'react';
import { OnboardingContainer, OnboardingContainerWrapper } from '../styled';
import BoardingPass from '../../../components/common/BoardingPass';
import {
  onboardingAnimate,
  onboardingTicketAnimate,
  pageAnimate,
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
  TicketSaveButton,
} from './styled';
import Logo from '../../../img/GDSC Logo Clear.png';
import html2canvas from 'html2canvas';
import { transparent } from 'material-ui/styles/colors';
import DownLoadLogo from '../../../img/DownLoad-Logo';
import MobileBlock from '../../../components/common/MobileBlock';

const OnboardingTicket = () => {
  const issueTicket = useRef<HTMLDivElement>(null);
  const SaveTicket = async () => {
    const element = issueTicket.current;
    const canvas = await html2canvas(
      element as HTMLDivElement,
      {
        background: 'transparent',
      } as Partial<any>,
    );

    const data = canvas.toDataURL('JasonBoardingPass/jpg');
    const link = document.createElement('a');

    if (typeof link.download === 'string') {
      link.href = data;
      link.download = 'JasonBoardingPass.jpg';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <OnboardingContainerWrapper>
      <MobileBlock />
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
          <ElementJustifyCenter ref={issueTicket}>
            <BoardingPassWrapper variants={onboardingTicketAnimate}>
              <BoardingPass />
            </BoardingPassWrapper>
          </ElementJustifyCenter>
          <ElementJustifyCenter>
            <TicketSaveButton
              variants={onboardingTicketAnimate}
              whileHover={{ shadow: '20', boxShadow: '0px 0px 10px #4385f3' }}
              onClick={() => {
                SaveTicket();
              }}
            >
              <DownLoadLogo />
              이미지 저장하기
            </TicketSaveButton>
          </ElementJustifyCenter>
        </BoardingTicketWrapper>
      </OnboardingContainer>
    </OnboardingContainerWrapper>
  );
};

export default OnboardingTicket;
