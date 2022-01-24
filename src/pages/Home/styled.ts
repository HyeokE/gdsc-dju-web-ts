import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomeWrapper = styled(motion.main)`
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const StyledRecruitmentButton = styled.button`
  width: 220px;
  height: 60px;
  border-radius: 75px;
  border-style: solid;
  background: #4385f3;
  border-width: 0px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 180px;
    height: 55px;
    font-size: 15px;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 45px;
    font-size: 13px;
  }
`;
export const StyledMainBanner = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  overflow-x: hidden;
  height: 100vh;
  z-index: 1;
  top: 0;
`;
export const BannerTitleWrapper = styled(motion.section)`
  position: static;
  display: flex;
  justify-content: center;
`;
export const RecruitingWrapper = styled(motion.div)`
  position: static;
  z-index: 50;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 60%;
  }
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 80%;
  }
  @media (max-width: 320px) {
    width: 80%;
  }
`;

export const LeftColorLinesWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  max-width: 500px;
  width: 40%;
  top: 35%;
  left: -200px;
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 45%;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    top: 200px;
    width: 300px;
    left: -100px;
  }
  @media (max-width: 760px) {
    top: 400px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    top: 350px;
  }
`;
export const RightColorLinesWrapper = styled(motion.div)`
  z-index: 1;
  position: absolute;
  top: 35%;
  max-width: 500px;
  width: 50%;
  right: -200px;
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 45%;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    top: 200px;
    width: 300px;
    right: -100px;
  }
  @media (max-width: 760px) {
    top: 20px;
  }
`;

export const ButtonWrapper = styled(motion.div)`
  margin-top: 50px;
`;
export const MainBannerText = styled(motion.p)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 20px;
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
export const DownArrowWrapper = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  display: flex;
  width: 100vw;
  justify-content: center;
  opacity: 50;
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    margin-top: 150px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    margin-top: 150px;
  }
  @media (max-width: 320px) {
    margin-top: 70px;
  }
`;
