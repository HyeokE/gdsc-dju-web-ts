import { motion } from 'framer-motion';
import styled from 'styled-components';
import {
  withFormik,
  FormikProps,
  FormikErrors,
  Form,
  Field,
  ErrorMessage,
} from 'formik';

export const OnboardingBackArrow = styled.img`
  height: 25px;
`;
export const OnboardingBackText = styled.div`
  font-size: 14px;
  font-family: 'Gothic A1', sans-serif;
  font-weight: 500;
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
  position: absolute;
  top: -10px;
  align-items: center;
  text-align: center;
  flex-direction: row;
  cursor: pointer;
`;
export const OnboardingInnerWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const OnboardingDescription = styled(motion.div)`
  margin-top: 15px;
  font-size: 16px;
  font-family: 'Gothic A1', sans-serif;
  color: #7d8b97;
`;

export const OnboardingInputWrapper = styled(motion.div)``;
export const ErrorMessageWrapper = styled.div`
  height: 30px;
`;
export const StyledErrorMessage = styled(ErrorMessage)`
  color: #f44336;
`;
export const OnboardingInput = styled(Field)`
  margin-top: 65px;
  font-size: 33px;
  border-style: solid;
  padding-left: 8px;
  padding-bottom: 24px;
  border-width: 0px;
  border-bottom-width: 5px;
  border-color: ${(props) => props.color};
  caret-color: ${(props) => props.color};
  color: ${(props) => props.color};
  width: 700px;
  ::placeholder {
    color: black;
    opacity: 20%;
  }
  :focus {
    outline: none;
  }
`;
export const OnboardingMiddleButton = styled(motion.button)`
  margin-top: 50px;
  height: 70px;
  width: 220px;
  color: white;
  border-style: solid;
  border-radius: 50px;
  border-width: 0px;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Gothic A1', sans-serif;
  cursor: pointer;
  background: ${(props) => props.color};
`;
export const OnboardingMiddleImage = styled(motion.img)`
  height: auto;
  width: auto;
  display: flex;

  z-index: -1;
`;
export const OnboardingImageWrapper = styled(motion.div)`
  position: absolute;
  height: 850px;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  right: -50px;
  bottom: -150px;
  z-index: -1;
`;
