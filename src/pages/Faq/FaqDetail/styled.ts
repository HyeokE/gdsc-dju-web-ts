import styled from 'styled-components';

export const QuestionTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 130%;
  color: ${(props) => props.theme.color.head};
  margin-bottom: 16px;
  @media (max-width: 500px) {
    font-size: 22px;
  }
`;
export const AnswerWrapper = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 150%;
  color: ${(props) => props.theme.color.body};
  margin-bottom: 72px;
  @media (max-width: 500px) {
    font-size: 13px;
  }
`;
export const AnswerText = styled.div`
  margin-bottom: 10px;
`;
export const BackToFaq = styled.div`
  margin-bottom: 30px;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 15px;
  }
`;
