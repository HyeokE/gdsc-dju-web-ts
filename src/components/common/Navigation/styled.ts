import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavDesign = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.03);
  background: white;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
`;
export const NavInner = styled.div`
  display: flex;
  flex: 1;
  max-width: 1140px;
  min-width: 320px;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  @media (max-width: 500px) {
    height: 70px;
  }
`;
export const StyledLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
`;
export const StyledImg = styled.img`
  margin-top: 3px;
  height: 60px;
`;
export const StyledLogo = styled.div`
  color: #4e4e4e;
  margin-right: 10px;
  font-weight: bold;
`;
export const SchoolName = styled.div`
  color: #4e4e4e;
  margin-right: 10px;
`;
export const WideNavigation = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`;
export const ShortNavigation = styled.div`
  @media (min-width: 500px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    color: #4e5968;
    background: #f2f4f6;
    text-decoration: none;
  }
`;

export const NavTask = styled.li`
  display: flex;
  align-items: center;
  margin: 0px 7px;
  cursor: pointer;
  color: #4e5968;
  font-size: 16px;
  font-style: normal;
  word-break: keep-all;
  list-style: none;
  text-decoration: none;
  border-radius: 8px;
`;

export const NavTaskWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;
export const NavIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  padding: 7px 7px;
  border-radius: 10px;
  transition-delay: 0.05s;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  :hover {
    background: #f2f4f6;
    cursor: pointer;
  }
`;
