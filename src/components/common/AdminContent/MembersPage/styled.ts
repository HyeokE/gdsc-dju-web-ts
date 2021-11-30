import { motion } from 'framer-motion';
import styled from 'styled-components';

export const MotionSelector = styled(motion.section)``;

export const StyledTableCategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 15px 0px;
  text-align: center;
  justify-content: space-around;
  font-weight: bold;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const StyledMobileTableCategoryWrapper = styled.div`
  display: none;
  width: 100%;
  flex-direction: row;
  padding: 15px 0px;
  text-align: center;
  justify-content: space-around;
  font-weight: bold;
  @media (max-width: 500px) {
    display: flex;
  }
  @media (max-width: 320px) {
    font-size: 14px;
  }
`;
export const StyledTableWrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 15px 0px;
  text-align: center;
  justify-content: space-around;
  transition: 0.3s;
  transition-delay: 0.2ms;
  &:hover {
    background: #f2f4f6;
    border-color: #9f9f9f;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    display: none;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
export const StyledMobileTableWrapper = styled(motion.div)`
  display: none;
  width: 100%;
  flex-direction: row;
  padding: 15px 0px;
  text-align: center;
  justify-content: space-around;
  transition: 0.3s;
  transition-delay: 0.2ms;
  font-size: 16px;
  &:hover {
    background: #f2f4f6;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    display: flex;
  }
  @media (max-width: 320px) {
    font-size: 13px;
  }
`;
export const StyledSmallColumn = styled.div`
  padding: 0px 5px;
  width: 100px;
`;
export const StyledColumn = styled.div`
  padding: 0px 7px;
  width: 120px;
`;
export const StyledLargeColumn = styled.div`
  padding: 0px 7px;
  width: 220px;
`;
export const MemberPageWrapper = styled.div`
  margin-top: 10px;
`;
export const StyledButton = styled.div``;
