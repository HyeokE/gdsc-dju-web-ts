import React from 'react';

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

const Navigation: React.FC = () => {
  return (
    <NavDesign>
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
        <WideNavCategory />
      </NavInner>
    </NavDesign>
  );
};

export default Navigation;
