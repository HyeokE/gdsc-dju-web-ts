import { motion } from 'framer-motion';
import styled from 'styled-components';

export const BoardingTicketWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;
`;
export const OnboardingMiddleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 100px;
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
  margin-top: 60px;
  font-size: 80px;
  font-weight: bold;
`;
export const BoardingTicketSubTitle = styled(motion.div)`
  margin-top: 5px;
  color: #afb8c1;
`;
export const BoardingPassWrapper = styled(motion.div)`
  margin: 50px;
  height: 100%;
  background: transparent;
`;
export const ElementJustifyCenter = styled(motion.div)`
  display: flex;
  justify-content: center;
`;
export const TicketSaveButton = styled(motion.button)`
  width: 250px;
  height: 70px;
  background: #f4f6fa;
  border-style: solid;
  border-width: 0px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 40px;
  font-family: 'Gothic A1', sans-serif;
  font-size: 17px;
  font-weight: bold;
  color: #4385f3;
  cursor: pointer;
`;
