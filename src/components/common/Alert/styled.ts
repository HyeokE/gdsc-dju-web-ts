import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AlertInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 15px 0px;
  justify-content: center;
  text-align: center;
  width: 100%;
  opacity: 80%;
  z-index: 3;
`;
export const AlertText = styled.div`
  font-size: ${(props) => props.theme.fontSize.h7};
  opacity: 100%;
  margin-left: 5px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color.grey800};
  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
`;
export const AlertInner = styled(motion.div)`
  position: fixed;
  background: #fff;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.color.grey300};
  box-shadow: inset 0 0 0 1px ${(props) => props.theme.color.grey300};
  padding: 7px 30px;
  top: 100px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 9999;
  & :hover {
    cursor: default;
  }
`;
export const AlertWrapper = styled(motion.div)`
  position: fixed;
  top: 100px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;
