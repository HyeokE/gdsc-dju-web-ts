import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MotionSelector = styled(motion.section)``;

export const StyledTableCategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 15px 0px;
  text-align: center;
  justify-content: space-around;
  background-color: white;
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
  border-width: 0px;
  background-color: white;
  cursor: pointer;
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
  background-color: white;
  font-size: 16px;
  @media (max-width: 500px) {
    display: flex;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;
export const StyledSmallColumn = styled(motion.div)`
  padding: 0px 5px;
  width: 100px;
`;
export const StyledColumn = styled(motion.div)`
  padding: 0px 7px;
  width: 120px;
`;
export const StyledLargeColumn = styled(motion.div)`
  padding: 0px 7px;
  width: 220px;
`;
export const MemberPageWrapper = styled(motion.div)`
  margin-top: 10px;
`;
export const StyledButton = styled.div``;
