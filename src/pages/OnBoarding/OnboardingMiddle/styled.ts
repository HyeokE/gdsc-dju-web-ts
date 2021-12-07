import { motion } from 'framer-motion';
import styled from 'styled-components';

export const OnboardingBackArrow = styled.img`
  height: 25px;
`;
export const OnboardingBackText = styled.div`
  font-size: 20px;
  font-family: 'Gothic A1', sans-serif;
  font-weight: normal;
  color: #c6c6c6;
  margin-left: 15px;
`;
export const OnboardingBackWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;
export const OnboardingInnerWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const OnboardingDescription = styled(motion.div)`
  margin-top: 42px;
  font-size: 20px;
  font-family: 'Gothic A1', sans-serif;

  color: #7d8b97;
`;
export const OnboardingInput = styled(motion.input)`
  margin-top: 88px;
  font-size: 40px;
  border-style: solid;
  border-width: 0px;
  border-bottom-width: 5px;
  width: 800px;
`;
