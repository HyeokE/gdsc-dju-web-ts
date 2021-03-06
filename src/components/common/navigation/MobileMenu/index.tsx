import React, { useRef } from 'react';

import { useRecoilState } from 'recoil';
import { menuState } from '../../../../store/menu';

import { sidebar } from '../../Variants/NavigationAnimation';
import { ShortNavigation } from '../DeskNavigation/styled';
import MobileMenuCategory from '../MobileMenuCategory';
import { MobileNavBackGround } from './styled';

const MobileMenu = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const containerRef = useRef(null);
  const height = '100vh';
  return (
    <ShortNavigation
      initial={false}
      animate={menu.appMenu ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <MobileNavBackGround variants={sidebar}>
        <MobileMenuCategory />
      </MobileNavBackGround>
    </ShortNavigation>
  );
};

export default MobileMenu;
