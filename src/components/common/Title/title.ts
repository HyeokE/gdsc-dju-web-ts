import styled from 'styled-components';

export const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #333c4b;
  word-break: break-word;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 40px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: 26px;
  }
`;
export const SubTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #333c4b;
  margin-bottom: 12px;
`;
export const MainText = styled.div`
  font-size: 16px;
  color: #4e5968;
  padding-bottom: 10px;
`;
