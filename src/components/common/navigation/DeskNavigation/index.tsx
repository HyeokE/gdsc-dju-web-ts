import React, { useEffect, useState } from 'react';

import GDSCLogoClear from '../../../../img/GDSCLogoClear.svg';

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

export const navigationData = [
  {
    route: '/introduce',
    title: '소개',
  },
  {
    route: '/recruit',
    title: '지원하기',
  },
  {
    route: '/conduct',
    title: 'Code of Conduct',
  },
  {
    route: '/faq',
    title: 'FAQ',
  },
];
export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <NavDesign
      className={
        location.pathname == ('/' || '/main') ? 'transparent' : 'white'
      }
    >
      <NavWrapper>
        <NavInner>
          <NavTaskWrapper>
            <NavTask>
              <StyledLogoWrapper to={'/'}>
                <StyledImg src={GDSCLogoClear} alt="GDSC-Chapter-Logo" />
                <StyledLogo>GDSC </StyledLogo>
                <SchoolName>Daejin</SchoolName>
                <SchoolNameUni>Univ.</SchoolNameUni>
              </StyledLogoWrapper>
            </NavTask>
          </NavTaskWrapper>
          <MenuToggleIcon />
          <DeskNavCategory
            routeStyle={location.pathname}
            navigationData={navigationData}
          />
        </NavInner>
      </NavWrapper>
    </NavDesign>
  );
};

export default Navigation;
