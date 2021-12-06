import React from 'react';
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
const ShortNavCategory = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  return (
    <>
      <ShortNavigation>
        <NavIconWrapper>
          <MenuIcon
            fontSize={'medium'}
            onClick={() => {
              setMenu({ ...menu, [MENU_KEY.APPMENU]: !menu.menu });
              console.log(menu.menu);
            }}
          />
        </NavIconWrapper>
      </ShortNavigation>
    </>
  );
};

export default ShortNavCategory;
