import { motion } from 'framer-motion';
import styled from 'styled-components';
export const OnboardingContainer = styled(motion.div)`
  display: flex;
  width: auto;
  margin: auto;
  justify-content: center;
  white-space: nowrap;
  flex-direction: column;
  @media (max-width: 1400px) {
    display: none;
  }
`;
export const OnboardingContainerWrapper = styled(motion.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const MobileText = styled(motion.div)`
  display: none;
  font-size: 16px;
  font-family: 'Gothic A1', sans-serif;
  color: #4e5968;
  @media (max-width: 1400px) {
    display: flex;
  }
`;
