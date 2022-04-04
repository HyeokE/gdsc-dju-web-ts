import { motion } from 'framer-motion';
import styled from 'styled-components';

export const QuestionWrapper = styled(motion.a)`
  cursor: pointer;
  padding: 24px 20px;
  display: flex;
  background: white;
  color: ${(props) => props.theme.color.grey700};
  flex-direction: column;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.h5};
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;
export const QuestionInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const AnswerWrapper = styled(motion.div)`
  box-sizing: border-box;
  padding: 20px 20px;
  padding-top: 0;
  color: ${({ theme }) => theme.color.grey800};
  font-size: ${({ theme }) => theme.fontSize.body1};
`;
export const QuestionBr = styled.div`
  border-top: 3px solid ${({ theme }) => theme.color.grey800};
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
