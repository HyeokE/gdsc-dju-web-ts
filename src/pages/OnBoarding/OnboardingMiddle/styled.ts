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
  padding-left: 8px;
  padding-bottom: 30px;
  border-width: 0px;
  border-bottom-width: 5px;
  width: 800px;
  ::placeholder {
    color: black;
    opacity: 20%;
  }
`;
export const OnboardingMiddleButton = styled(motion.button)`
  margin-top: 80px;
  min-height: 84px;
  width: 274px;
  color: white;
  border-style: solid;
  border-radius: 50px;
  border-width: 0px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Gothic A1';
  cursor: pointer;
`;
export const OnboardingMiddleImage = styled(motion.img)`
  height: 500px;
  width: auto;
  position: absolute;
  right: 150px;
  bottom: 0px;
`;
