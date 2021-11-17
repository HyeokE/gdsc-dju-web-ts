import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  z-index: 999;
`;
export const ModalInnerWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  min-width: 280px;
  min-height: 400px;
  background: white;
  border-radius: 10px;
  padding: 10px 20px;
`;
