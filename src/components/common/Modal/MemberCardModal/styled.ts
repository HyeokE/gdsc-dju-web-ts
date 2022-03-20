import styled from 'styled-components';
import { Modal } from 'react-rainbow-components';
import { motion } from 'framer-motion';

export const MemberCardModalInner = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 200px;
`;
export const StyledModal = styled(motion.div)`
  border: 1px solid ${(props) => props.theme.color.grey500};
  width: 440px;
  overflow: hidden;
  padding: 60px 0;
  z-index: 1000;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
`;
export const ModalWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  will-change: opacity;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.5s ease;
  z-index: 999;
`;
