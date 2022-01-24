import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  margin-top: 15px;
`;
export const SidebarContainer = styled.div`
  width: 100%;
`;
export const AdminContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledButtonWrapper = styled.div`
  margin-right: 10px;
`;
export const AdminHeaderWrapper = styled.div`
  background: ${(props) => props.theme.color.gray200};
`;
export const StyledAdminButton = styled.button`
  border-style: none;
  border-radius: 10px;
  font-size: 14px;
  color: white;
  transition: 0.3s;
  transition-delay: 0.3ms;
  transform-style: initial;
  cursor: pointer;
  background: ${(props) => props.theme.color.tossBlue};
  padding: 7px 20px;
  align-items: center;
  :hover {
    background: ${(props) => props.theme.color.tossBlueActive};
  }
  @media (max-width: 500px) {
    padding: 7px 13px;
    font-size: 13px;
  }
`;
export const ButtonElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
export const StyledUserName = styled.div`
  color: ${(props) => props.theme.color.gray700};
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
export const StyledSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  transition: 0.3s;
  transition-delay: 0.3ms;
  transform-style: initial;
`;
export const AdminBlockPage = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 50%;
  background: ${(props) => props.theme.color.gray500};
  z-index: 999;
`;
