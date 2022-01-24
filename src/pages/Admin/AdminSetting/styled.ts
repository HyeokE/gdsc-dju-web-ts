import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Switch = styled.div`
  width: 50px;
  height: 25px;
  background-color: ${(props) => props.theme.color.grey700};
  display: flex;
  justify-content: flex-start;
  border: 1px solid;
  border-color: ${(props) => props.theme.color.grey700};
  border-radius: 50px;
  padding: 5px;
  cursor: pointer;
  &[data-isOn='true'] {
    justify-content: flex-end;
    background-color: ${(props) => props.theme.color.tossBlue};
  }
`;

export const Handle = styled(motion.div)`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 40px;
`;
export const StyledPosition = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const ToggleButtonWrapper = styled.div`
  width: 33.333%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const ToggleButtonSection = styled.section`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
`;
