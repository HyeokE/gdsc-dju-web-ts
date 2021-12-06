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
import ShortNavCategory from './ShortNavCategory';
import { useLocation } from 'react-router';
import './Navigation.css';

const Navigation: React.FC = () => {
  const locaton = useLocation();
  const [routeStyle, setRoutStyle] = useState<string>('/');
  console.log(locaton.pathname);
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
        <ShortNavCategory />
        <WideNavCategory routeStyle={routeStyle} />
      </NavInner>
    </NavDesign>
  );
};

export default Navigation;
