import { motion } from 'framer-motion';

import styled from 'styled-components';

export const OnboardingTopLogoWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const OnboardingLogo = styled(motion.img)`
  height: 28px;
  @media (max-width: 1500px) {
    height: 20px;
  }
`;

export const OnboardingTopText = styled(motion.div)`
  font-size: 30px;
  color: #4e4e4e;
  margin-left: 35px;
  font-weight: normal;
  @media (max-width: 1500px) {
    font-size: 20px;
    margin-left: 25px;
  }
`;
export const OnboardingTitle = styled(motion.div)<any>`
  font-size: 80px;
  font-weight: bold;
  font-family: 'Product Sans', sans-serif;
  color: ${(props) => props.color};
  margin-left: ${(props) => props.marginLeft}px;
  @media (max-width: 1500px) {
    font-size: 65px;
  }
`;
export const OnboardingSubTitle = styled(motion.div)`
  font-size: 25px;
  font-weight: bold;
  color: #4385f3;
  @media (max-width: 1500px) {
    font-size: 19px;
  }
`;
export const OnboardingTravel = styled(motion.div)`
  font-size: 40px;
  font-weight: bold;
`;
export const OnboardingTravelWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
`;
export const OnboardingTravelImage = styled(motion.img)`
  height: 45px;
  margin: 0px 45px;
  @media (max-width: 1500px) {
    margin: 0px 40px;
  }
`;

export const OnboardingTitleWrapper = styled(motion.div)`
  margin-top: 55px;
  @media (max-width: 1500px) {
    margin-top: 45px;
  }
`;
export const OnboardingBottomWrapper = styled(motion.div)`
  margin-top: 178px;
  @media (max-width: 1500px) {
    margin-top: 150px;
  }
`;
export const OnboardingDetailWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-left: 95px;
  @media (max-width: 1500px) {
    margin-left: 75px;
  }
`;
export const OnboardingDetailTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  opacity: 30%;
`;
export const OnboardingDetailText = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
export const OnBoardingButton = styled(motion.button)`
  margin-left: 174px;
  width: 274px;
  height: 84px;
  border-radius: 42px;
  border-style: solid;
  border-width: 0px;
  background: #4385f3;
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 1500px) {
    margin-left: 100px;
    width: 200px;
    height: 75px;
    font-size: 18px;
  }
`;
