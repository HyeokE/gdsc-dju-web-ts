import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NavDesign = styled.nav`
  position: sticky;
  top: 0;
  z-index: 990;
  height: 70px;
  width: 100%;
`;
export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  height: 100%;
`;
export const NavInner = styled.div`
  width: 92%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
export const StyledLogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
`;
export const StyledImg = styled.img`
  height: 20px;
  width: 100%;
  margin: 0 8px;
`;
export const StyledLogo = styled.div`
  color: ${(props) => props.theme.color.grey800};
  margin-right: 5px;
  font-weight: 600;
  font-size: 2rem;

  //@media (max-width: 600px) {
  //  display: none;
  //}
`;
export const SchoolNameUni = styled.div`
  color: ${(props) => props.theme.color.grey600};
  font-size: ${(props) => props.theme.fontSize.body3};
  margin-top: 6px;
  margin-right: 5px;
  font-weight: 500;

  //@media (max-width: 740px) {
  //  display: none;
  //}
`;
export const SchoolName = styled.div`
  color: ${(props) => props.theme.color.grey600};
  font-size: ${(props) => props.theme.fontSize.body3};
  margin-top: 6px;
  margin-right: 5px;
  display: flex;
  font-weight: 500;
  //@media (max-width: 670px) {
  //  display: none;
  //}
`;
export const WideNavigation = styled.div`
  z-index: 999;
  margin-left: 20px;
  @media (max-width: 560px) {
    display: none;
  }
`;
export const NavigationWrapper = styled.div`
  position: sticky;
`;
export const ShortNavigation = styled(motion.nav)`
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  @media (min-width: 560px) {
    display: none;
  }
`;

export const StyledLink = styled(motion.div)`
  text-decoration: none;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  border-radius: 8px;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  font-size: 1.4rem;
  transition-delay: 0s;
  &:hover {
    color: ${(props) => props.theme.color.grey900};
    background: #f2f4f6;
    text-decoration: none;
  }
`;

export const NavTask = styled.li`
  display: flex;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
  color: ${(props) => props.theme.color.grey800};
  font-size: 1.4rem;
  font-weight: 500;
  word-break: keep-all;
  list-style: none;
  text-decoration: none;
  border-radius: 8px;
`;

export const NavTaskWrapper = styled.ul`
  display: flex;
  flex: 1;
  align-items: center;
  list-style: none;
  padding-left: 0;
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
    background: ${(props) => props.theme.color.grey100};
    cursor: pointer;
  }
`;
