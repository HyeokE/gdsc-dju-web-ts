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

export const StyledButton = styled.button`
  width: 220px;
  height: 60px;
  border-radius: 75px;
  border-style: solid;
  background: #4385f3;
  border-width: 0px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
export const StyledMainBanner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  height: 1300px;
  z-index: 1;
`;
export const BannerTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const RecruitingWrapper = styled.div`
  z-index: 50;
  position: absolute;
  top: 500px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    top: 300px;
    width: 60%;
  }
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    top: 200px;
    width: 70%;
  }
  @media (max-width: 320px) {
    top: 200px;
    width: 80%;
  }
`;

export const LeftColorLinesWrapper = styled.div`
  transform: scaleX(-1);
  z-index: 1;
  position: absolute;
  max-width: 500px;
  width: 40%;
  top: 350px;
  left: -230px;
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 50%;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    top: 200px;
    width: 400px;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
export const RightColorLinesWrapper = styled.div`
  z-index: 1;
  position: absolute;
  top: 350px;
  max-width: 500px;
  width: 40%;
  right: -230px;
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 50%;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    top: 200px;
    width: 400px;
  }
  @media (max-width: 760px) {
    display: none;
  }
`;
export const MarginPage = styled.div`
  height: 500px;
`;
export const ButtonWrapper = styled.div`
  margin-top: 50px;
`;
export const MainBannerText = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 23px;
  color: rgb(139, 149, 161);
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    font-size: 20px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 15px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
`;
