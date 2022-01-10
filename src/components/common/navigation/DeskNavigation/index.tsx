import React, { useEffect, useState } from 'react';

import GDSCLogoClear from '../../../../img/GDSCLogoClear.png';

import { useLocation } from 'react-router';
import './Navigation.css';
import MenuToggleIcon from '../../MenuToggleIcon';
import {
  NavDesign,
  NavInner,
  NavTask,
  StyledImg,
  StyledLogo,
  SchoolName,
  NavTaskWrapper,
  SchoolNameUni,
  StyledLogoWrapper,
} from './styled';
import WideNavCategory from '../WideNavCategory';

export const navigationData = [
  {
    route: '/introduce',
    title: '소개',
  },
  {
    route: '/joinus',
    title: '지원하기',
  },
  {
    route: '/conduct',
    title: 'Code of Conduct',
  },
  {
    route: '/faq',
    title: '자주 하는 질문',
  },
];
export const Navigation: React.FC = () => {
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
        <MenuToggleIcon />
        <WideNavCategory
          routeStyle={routeStyle}
          navigationData={navigationData}
        />
      </NavInner>
    </NavDesign>
  );
};

export default Navigation;
