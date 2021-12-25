import styled from 'styled-components';

export const StyledTap = styled.div`
  padding: 7px 15px;
  margin-right: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-width: 0px;
  font-size: 18px;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
export const StyledTapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const StyledUl = styled.ul`
  display: flex;
  padding-left: 0;
  justify-content: flex-start;
`;
export const StyledLi = styled.li`
  background: white;
  cursor: pointer;
  height: 24px;
  padding-top: 24px;
  margin: 0px 30px;
  padding-bottom: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  font-size: 17px;
  @media (max-width: 500px) {
    font-size: 15px;
    margin: 0px 15px;
  }
`;
export const StyledLine = styled.div`
  background: black;
  height: 2px;
  opacity: 10%;
`;
