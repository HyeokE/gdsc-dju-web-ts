import styled from 'styled-components';

export const Menu = styled.div`
  top: 0px;
  position: fixed;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;
export const MenuInner = styled.div`
  top: 70px;
  position: fixed;
  background: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuWrapper = styled.div`
  transition-timing-function: ease;

  padding: 7px 20px;
  :hover {
    background: #f2f4f6;
    cursor: pointer;
  }
`;
