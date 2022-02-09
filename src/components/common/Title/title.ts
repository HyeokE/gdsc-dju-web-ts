import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: 600;
  color: ${(props) => props.theme.color.grey800};
  word-break: keep-all;
  margin-bottom: 10px;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: ${(props) => props.theme.fontSize.h2};
  }
  @media (max-width: 500px) {
    font-size: ${(props) => props.theme.fontSize.h3};
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
export const SubCategory = styled(motion.p)`
  font-size: 1.7rem;
  font-weight: 500;
  color: ${(props) => props.theme.color.grey800};
  margin-bottom: 10px;
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
export const MainText = styled(motion.p)`
  font-size: 1.6rem;
  color: ${(props) => props.theme.color.grey700};
  font-weight: 400;
  padding-bottom: 10px;
`;
