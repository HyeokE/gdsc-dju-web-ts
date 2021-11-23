import styled from 'styled-components';

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 320px) {
    flex-direction: column;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const IntroduceWrapper = styled.div`
  min-width: ${(props) => props.theme.windowSize.mobile} {
    width: 320px;
  }
`;
export const JoinWrapper = styled.div`
  width: 337px;
`;
export const JoinInner = styled.div`
  display: flex;
  position: sticky;
  top: 100px;
  flex-direction: column;
`;
export const MinTitle = styled.div`
  width: 90px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: rgb(107, 118, 132);
`;
export const MinText = styled.div`
  color: #3886f6;
`;

export const ElementWrapper = styled.div`
  padding: 14px 0px;
  display: flex;
  border-top: 1px solid rgba(0, 29, 58, 0.18);
  @media (max-width: 500px) {
    width: 100%;
  }
`;
