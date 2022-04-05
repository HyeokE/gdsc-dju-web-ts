import React, { useEffect, useState } from 'react';

import GDSCLogo from '../../../../assets/GDSCLogo.svg';

import { useLocation } from 'react-router';
import './Navigation.css';
import MenuToggleIcon from '../../MenuToggleIcon';
import {
  NavDesign,
  NavInner,
  NavTask,
  NavTaskWrapper,
  NavWrapper,
  SchoolName,
  SchoolNameUni,
  StyledImg,
  StyledLogo,
  StyledLogoWrapper,
} from './styled';
import DeskNavCategory from '../DeskNavCategory';
import MobileMenu from '../MobileMenu';

export const navigationData = [
  {
    route: '/introduce',
    title: 'Introduce',
  },
  {
    route: '/recruit',
    title: 'Recruiting',
  },
  {
    route: '/faq',
    title: 'FAQ',
  },
];
export const Navigation: React.FC = () => {
  const location = useLocation();
  const checkLocation = location.pathname == ('/' || '/main');
  const disableNavigation = () => {
    let result = false;
    if (location.pathname.includes('auth')) {
      result = true;
    }
    if (location.pathname.includes('admin')) {
      result = true;
    }
    return result;
  };

  return (
    <NavDesign background={checkLocation} disable={disableNavigation()}>
      <NavWrapper>
        <NavInner>
          <NavTaskWrapper>
            <NavTask>
              <StyledLogoWrapper to={'/'}>
                <StyledImg src={GDSCLogo} alt="GDSC-Chapter-Logo" />
                <StyledLogo>GDSC </StyledLogo>
                <SchoolName>Daejin</SchoolName>
                <SchoolNameUni>Univ.</SchoolNameUni>
              </StyledLogoWrapper>
              <DeskNavCategory
                routeStyle={location.pathname}
                navigationData={navigationData}
              />
            </NavTask>
          </NavTaskWrapper>
          <MenuToggleIcon />
        </NavInner>
      </NavWrapper>
      <MobileMenu />
    </NavDesign>
  );
};

export default Navigation;
