import styled from 'styled-components';
import { Modal } from 'react-rainbow-components';

export const ModalElementWrapper = styled.div`
  margin-bottom: 15px;
`;
export const StyledModal = styled(Modal)`
  display: flex;
  padding: 10px;
  width: 400px;
  scrollbar-width: none;
  & ::-webkit-scrollbar {
    display: none;
  }
`;
