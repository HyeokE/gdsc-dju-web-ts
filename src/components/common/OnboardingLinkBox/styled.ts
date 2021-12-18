import { motion } from 'framer-motion';
import styled from 'styled-components';
export const LinkBoxInner = styled(motion.div)`
  width: 250px;
  height: 180px;
  border-style: solid;
  border-radius: 20px;
  border-color: #d8d8d8;
  border-width: 1px;
  padding-left: 38px;
  background: white;
  margin-right: 30px;
  :hover {
    cursor: pointer;
  }
`;
export const LinkLogoWrapper = styled.div`
  height: 40px;
  margin-bottom: 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const LinkLogo = styled.img`
  height: 35px;
`;
export const LinkText = styled.img`
  height: 25px;
  margin-left: 15px;
`;

export const LinkDescription = styled.div`
  font-family: 'Gothic A1', sans-serif;
  font-weight: 600;
  font-size: 14px;
  opacity: 34%;
  margin-bottom: 58px;
`;