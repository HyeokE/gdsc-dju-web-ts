import { motion } from 'framer-motion';
import styled from 'styled-components';
export const LinkBoxInner = styled(motion.div)`
  min-width: 335px;
  height: 216px;
  border-style: solid;
  border-radius: 20px;
  border-color: #d8d8d8;
  border-width: 1px;
  padding-left: 38px;
  background: white;
  margin-right: 40px;
  :hover {
    cursor: pointer;
  }
`;
export const LinkLogoWrapper = styled.div`
  height: 50px;
  margin-bottom: 30px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const LinkLogo = styled.img`
  height: 50px;
`;
export const LinkText = styled.img`
  height: 40px;
  margin-left: 23px;
`;

export const LinkDescription = styled.div`
  font-family: 'Gothic A1', sans-serif;
  font-weight: 600;
  font-size: 16px;
  opacity: 34%;
  margin-bottom: 58px;
`;
