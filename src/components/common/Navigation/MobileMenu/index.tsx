import React, { useEffect, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  NavTask,
  NavTaskWrapper,
  StyledLink,
  NavIconWrapper,
  ShortNavigation,
} from '../styled';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import MobileMenuCategory from '../MobileMenuCategory';
import MenuToggleIcon from '../../MenuToggleIcon';
import { motion, useCycle } from 'framer-motion';
import { sidebar } from '../../Variants/NavigationAnimation';
import { MobileNavBackGround } from './styled';

const MobileMenu = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const containerRef = useRef(null);
  const height = '100vh';
  return (
    <>
      <ShortNavigation
        initial={false}
        animate={menu.appMenu ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <MobileMenuCategory />
        <MobileNavBackGround variants={sidebar} />
        <MenuToggleIcon />
      </ShortNavigation>
    </>
  );
};

export default MobileMenu;
