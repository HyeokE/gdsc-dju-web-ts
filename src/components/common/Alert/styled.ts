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
  font-size: 18px;
  opacity: 100%;
  margin-left: 5px;
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    font-size: 17px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
`;
export const AlertWrapper = styled(motion.div)`
  position: fixed;
  width: 100%;
  top: 70px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;

  & :hover {
    cursor: default;
  }
`;
