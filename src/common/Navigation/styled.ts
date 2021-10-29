import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavDesign = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.03);
  background: white;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1;
`;
const NavInner = styled.div`
  display: flex;
  flex: 1;
  max-width: 1140px;
  margin: 0 auto;
  min-width: 320px;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  @media (max-width: 500px) {
    height: 70px;
  }
`;
const StyledLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;
const StyledImg = styled.img`
  margin-top: 3px;
  height: 60px;
`;
const StyledLogo = styled.div`
  color: #4e4e4e;
  margin-right: 10px;
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;

  &:hover {
    color: #4e4e4e;
    font-weight: bold;
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
    font-weight: normal;
    color: #b8b8b8;
  }
`;

const NavTask = styled.li`
  display: flex;
  align-items: center;
  margin: 0px 20px;
  padding: 0px 8px;
  cursor: pointer;
  color: #4e5968;
  font-size: 16px;
  font-style: normal;
  word-break: keep-all;
  list-style: none;
  text-decoration: none;
`;

const NavUserProfileImg = styled.img`
  width: 50px;
  border-radius: 25px;
`;
const NavTaskWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;

export {
  StyledLogoWrapper,
  StyledImg,
  NavInner,
  NavDesign,
  StyledLink,
  NavTask,
  NavUserProfileImg,
  NavTaskWrapper,
  StyledLogo,
};
