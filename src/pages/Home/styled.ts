import styled from 'styled-components';

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  top: -50px;
  width: 100%;
  height: 700px;
`;
export const StyledVideo = styled.video`
  object-fit: cover;
  width: auto;
  height: 100%;
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    height: 100%;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    height: 100%;
  }
  @media (max-width: 500px) {
    height: 65%;
  }
  @media (max-width: 320px) {
    height: 55%;
  }
`;
