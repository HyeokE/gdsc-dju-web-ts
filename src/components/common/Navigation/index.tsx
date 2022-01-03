import React, { useEffect, useState } from 'react';

import {
  NavDesign,
  NavInner,
  NavTask,
  NavTaskWrapper,
  SchoolName,
  SchoolNameUni,
  StyledImg,
  StyledLogo,
  StyledLogoWrapper,
} from './styled';
import GDSCLogoClear from '../../../img/GDSCLogoClear.png';
import WideNavCategory from './WideNavCategory';
import { useLocation } from 'react-router';
import './Navigation.css';
import ShortNavCategory from './MobileMenu';
import MobileMenu from './MobileMenu';

const Navigation: React.FC = () => {
  const locaton = useLocation();
  const [routeStyle, setRoutStyle] = useState<string>('/');
  useEffect(() => {
    setRoutStyle(locaton.pathname);
  });
  return (
    <NavDesign className={routeStyle === '/' ? 'transparent' : 'white'}>
      <NavInner>
        <NavTaskWrapper>
          <NavTask>
            <StyledLogoWrapper to={'/'}>
              <StyledImg
                src={GDSCLogoClear}
                alt="GDSC-Chapter-Logo"
                height={40}
              />
              <StyledLogo>GDSC </StyledLogo>
              <SchoolName>Daejin</SchoolName>
              <SchoolNameUni>Univ.</SchoolNameUni>
            </StyledLogoWrapper>
          </NavTask>
        </NavTaskWrapper>
        <MobileMenu />
        <WideNavCategory routeStyle={routeStyle} />
      </NavInner>
    </NavDesign>
  );
};

export default Navigation;
