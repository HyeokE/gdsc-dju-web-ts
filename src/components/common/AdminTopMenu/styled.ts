import styled from 'styled-components';

export const StyledTap = styled.div`
  padding: 7px 15px;
  margin-right: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-width: 0px;
  font-size: 20px;
  font-weight: bold;
  :hover {
    cursor: pointer;
    background: #efefef;
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
`;
export const StyledTapWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
