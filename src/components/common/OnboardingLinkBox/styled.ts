import { motion } from 'framer-motion';
import styled from 'styled-components';
export const LinkBox = styled(motion.div)`
  width: 253px;
  height: 164px;
  border-style: solid;
  border-radius: 20px;
  border-color: #d8d8d8;
  border-width: 1px;

  background: white;
  margin-right: 30px;
  :hover {
    cursor: pointer;
  }
`;
export const LinkBoxInner = styled.div`
  padding-left: 28px;
`;
export const LinkLogoWrapper = styled.div`
  height: 40px;
  margin-bottom: 27px;
  margin-top: 48px;
  display: flex;
  align-items: center;
  flex-direction: row;
  @media (min-width: 1400px) {
    height: 50px;
    margin-top: 60px;
    margin-bottom: 35px;
  }
`;
export const LinkLogo = styled.img`
  height: 35px;
  @media (min-width: 1400px) {
    height: 40px;
  }
`;
export const LinkText = styled.img`
  height: 25px;
  margin-left: 15px;
`;

export const LinkDescription = styled.div`
  font-family: 'Gothic A1', sans-serif;
  font-weight: 600;
  font-size: 11px;
  opacity: 34%;
  margin-bottom: 46px;
`;
