import styled from 'styled-components';

export const QuestionTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 130%;
  color: ${(props) => props.theme.color.head};
  margin-bottom: 16px;
  @media (max-width: 500px) {
    font-size: 2.2rem;
  }
`;
export const AnswerWrapper = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 150%;
  color: ${(props) => props.theme.color.body};
  margin-bottom: 72px;
  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;
export const AnswerText = styled.div`
  margin-bottom: 10px;
`;
export const BackToFaq = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  font-size: 1.6rem;
  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;
