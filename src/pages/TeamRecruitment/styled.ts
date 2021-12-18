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
  margin-right: 20px;
  box-sizing: inherit;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    max-width: 320px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    max-width: 550px;
  }
`;
export const JoinWrapper = styled.div`
  width: 337px;
  min-width: 250px;

  display: none;
  @media (min-width: 500px) {
    display: block;
  }
`;
export const JoinInner = styled.div`
  display: flex;
  position: sticky;
  width: 100%;
  top: 100px;
  flex-direction: column;
  @media (max-width: 500px) {
    position: initial;
  }
  @media (max-width: 320px) {
    position: initial;
  }
`;
export const MinTitle = styled.div`
  width: 90px;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  color: ${(props) => props.theme.color.subCategory};
`;
export const MinText = styled.div`
  color: #3886f6;
`;

export const ElementWrapper = styled.div`
  padding: 14px 0px;
  display: flex;
  border-top: 1px solid ${(props) => props.theme.color.brColor};
  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const MoblieTopElementWrapper = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;

    bottom: 10px;
  }
`;
export const MoblieBottomElementWrapper = styled.div`
  display: none;
  background: -webkit-linear-gradient(
    bottom,
    rgba(255, 255, 255, 1) 83%,
    rgba(255, 255, 255, 0)
  );
  padding-top: 20px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    position: sticky;
    bottom: 0px;
  }
`;
