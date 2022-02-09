import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Title = styled(motion.h1)`
  font-size: 4.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.grey800};
  word-break: keep-all;
  margin-bottom: 10px;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 4rem;
  }
  @media (max-width: 500px) {
    font-size: 2.4rem;
  }
`;
export const SubTitle = styled(motion.h2)`
  font-size: 1.7rem;
  font-weight: 400;
  color: ${(props) => props.theme.color.grey600};
  margin-bottom: 10px;
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
export const MainText = styled(motion.p)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.color.grey800};
  padding-bottom: 10px;
`;
