import { motion } from 'framer-motion';
import styled from 'styled-components';

export const QuestionWrapper = styled(motion.a)`
  margin-bottom: 24px;
  cursor: pointer;
  font-size: 2rem;
  padding: 20px 20px;
  display: flex;
  background: white;
  color: ${(props) => props.theme.color.grey700};
  flex-direction: row;
  border-radius: 10px;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
export const QuestionMark = styled.div`
  height: 100%;
  ::before {
    display: flex;
    height: 100%;
    margin-right: 16px;
    margin-bottom: 2px;
    font-weight: 700;
    color: ${(props) => props.theme.color.grey700};
    content: 'Q';
  }
`;
