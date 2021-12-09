import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BoardingTicketWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const OnboardingMiddleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;
export const BoardingTicketLogoWrapper = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const BoardingTicketLogoText = styled.div`
  font-size: 24px;
  margin-left: 28px;
  color: #4e4e4e;
`;
export const BoardingTicketLogoImage = styled.img`
  height: 22px;
`;
export const BoardingTicketTitle = styled.div`
  margin-top: 50px;
  font-size: 80px;
  font-weight: bold;
`;
export const BoardingTicketSubTitle = styled(motion.div)`
  margin-top: 5px;
  color: #afb8c1;
`;
export const BoardingPassWrapper = styled(motion.div)`
  margin-top: 50px;
  height: 100%;
`;
export const ElementJustifyCenter = styled(motion.div)`
  display: flex;
  justify-content: center;
`;
