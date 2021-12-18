import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MobileTextWrapper = styled(motion.div)`
  display: none;
  font-size: 16px;
  font-family: 'Gothic A1', sans-serif;
  color: #4e5968;
  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
export const MobileText = styled(motion.div)`
  font-size: 16px;
  font-family: 'Gothic A1', sans-serif;
  margin-bottom: 5px;
`;
