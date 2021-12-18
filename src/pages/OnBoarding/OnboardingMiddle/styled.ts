import { motion } from 'framer-motion';
import styled from 'styled-components';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

export const OnboardingBackArrow = styled.img`
  height: 25px;
`;
export const OnboardingBackText = styled.div`
  font-size: 20px;
  font-family: 'Gothic A1', sans-serif;
  font-weight: normal;
  color: #c6c6c6;
  margin-left: 15px;
`;
export const OnboardingMiddleElementWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const OnboardingBackWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
`;
export const OnboardingInnerWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const OnboardingDescription = styled(motion.div)`
  margin-top: 42px;
  font-size: 20px;
  font-family: 'Gothic A1', sans-serif;
  color: #7d8b97;
  @media (max-width: 1500px) {
    font-size: 17px;
  }
`;

export const OnboardingInputWrapper = styled(motion.div)``;
export const OnboardingInput = styled(Field)`
  margin-top: 88px;
  font-size: 40px;
  border-style: solid;
  padding-left: 8px;
  padding-bottom: 30px;
  border-width: 0px;
  border-bottom-width: 5px;
  border-color: ${(props) => props.color};
  caret-color: ${(props) => props.color};
  color: ${(props) => props.color};
  width: 800px;
  ::placeholder {
    color: black;
    opacity: 20%;
  }
  :focus {
    outline: none;
  }
  @media (max-width: 1500px) {
    font-size: 30px;
    width: 750px;
  }
`;
export const OnboardingMiddleButton = styled(motion.button)`
  margin-top: 70px;
  height: 84px;
  width: 274px;
  color: white;
  border-style: solid;
  border-radius: 50px;
  border-width: 0px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Gothic A1', sans-serif;
  cursor: pointer;
  background: ${(props) => props.color};
  @media (max-width: 1500px) {
    width: 200px;
    height: 70px;
    font-size: 17px;
  }
`;
export const OnboardingMiddleImage = styled(motion.img)`
  height: auto;
  width: auto;
  display: flex;
  right: 0px;
  bottom: 0px;
  z-index: -1;
`;
export const OnboardingImageWrapper = styled(motion.div)`
  position: static;
  height: 850px;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  z-index: -1;
`;
