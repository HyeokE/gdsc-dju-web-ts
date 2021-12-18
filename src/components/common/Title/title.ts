import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Title = styled(motion.div)`
  font-size: 48px;
  font-weight: bold;
  color: #333c4b;
  word-break: keep-all;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 40px;
  }
  @media (max-width: 500px) {
    font-size: 26px;
  }
`;
export const SubTitle = styled(motion.div)`
  font-size: 17px;
  font-weight: bold;
  color: ${(props) => props.theme.color.head};
  margin-bottom: 12px;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
export const MainText = styled(motion.div)`
  font-size: 16px;
  color: ${(props) => props.theme.color.body};
  padding-bottom: 10px;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
