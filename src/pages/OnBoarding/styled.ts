import { motion } from 'framer-motion';
import styled from 'styled-components';
export const OnboardingContainer = styled(motion.div)`
  display: flex;
  width: 1100px;
  height: 550px;
  margin: auto;
  justify-content: center;
  white-space: nowrap;
  flex-direction: column;
  @media (max-width: 1300px) {
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
