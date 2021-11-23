import React, { useState } from 'react';
import styled from 'styled-components';
import { NavIconWrapper, NavTask, StyledLink } from '../styled';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState, MenuState } from '../../../../store/menu';
import { MenuInner, Menu, MenuWrapper } from './styled';
import './MobileMenu.css';

const MoblieMenu = () => {
  const [menu, setMenu] = useRecoilState(menuState);

  const closeMenu = () => setMenu({ ...menu, [MENU_KEY.APPMENU]: false });

  return (
    <Menu className={menu.menu ? 'appMenu active' : 'appMenu'}>
      <MenuInner>
        <MenuWrapper
          className={menu.menu ? ' appMenuActive ' : 'appMenuCategory'}
          onClick={() => closeMenu()}
        >
          <StyledLink to={'/introduce'}>소개</StyledLink>
        </MenuWrapper>
        <MenuWrapper
          className={menu.menu ? ' appMenuActive' : 'appMenuCategory'}
          onClick={() => closeMenu()}
        >
          <StyledLink to={'/joinus'}>지원하기</StyledLink>
        </MenuWrapper>
        <MenuWrapper
          className={menu.menu ? 'appMenuActive ' : 'appMenuCategory'}
          onClick={() => closeMenu()}
        >
          <StyledLink to={'/introduce'}>Code of Conduct</StyledLink>
        </MenuWrapper>
      </MenuInner>
    </Menu>
  );
};

export default MoblieMenu;
