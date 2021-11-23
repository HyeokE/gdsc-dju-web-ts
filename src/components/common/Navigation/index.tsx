import React from 'react';

import {
  NavDesign,
  NavInner,
  NavTask,
  NavTaskWrapper,
  SchoolName,
  StyledImg,
  StyledLogo,
  StyledLogoWrapper,
} from './styled';
import { useRecoilState } from 'recoil';
import { statusState } from '../../../store/status';
import { userDataState } from '../../../store/user';
import GDSCLogoClear from '../../../img/GDSCLogoClear.png';
import WideNavCategory from './WideNavCategory';
import { motion } from 'framer-motion';
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
              <SchoolName>Daejin Univ.</SchoolName>
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
