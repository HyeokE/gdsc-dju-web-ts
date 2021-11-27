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
export const StyledAdminButton = styled.button`
  border-style: none;
  border-radius: 10px;
  font-size: 16px;
  color: white;
  background: #42a5f5;
  padding: 7px 20px;

  :hover {
    background: #3886f6;
    cursor: pointer;
  }
  @media (max-width: 500px) {
    padding: 7px 13px;
    font-size: 14px;
  }
`;
export const ButtonElementWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;
export const StyledUserName = styled.div`
  color: #4e5968;
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
