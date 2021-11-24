import React, { useState } from 'react';
import styled from 'styled-components';
import { NavIconWrapper, NavTask, StyledLink } from '../styled';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState, MenuState } from '../../../../store/menu';
import { MenuInner, Menu, MenuWrapper, CategoryLine } from './styled';
import './MobileMenu.css';
import { useHistory } from 'react-router-dom';

const MoblieMenu = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const history = useHistory();

  const closeMenu = () => setMenu({ ...menu, [MENU_KEY.APPMENU]: false });

  return (
    <Menu className={menu.menu ? 'appMenu active' : 'appMenu'}>
      <MenuInner>
        <MenuWrapper
          className={menu.menu ? ' appMenuActive ' : 'appMenuCategory'}
          onClick={() => {
            closeMenu();
            history.push('/introduce');
          }}
        >
          <StyledLink to={'/introduce'}>소개</StyledLink>
        </MenuWrapper>
        <CategoryLine />
        <MenuWrapper
          className={menu.menu ? ' appMenuActive' : 'appMenuCategory'}
          onClick={() => {
            closeMenu();
            history.push('/joinus');
          }}
        >
          <StyledLink to={'/joinus'}>지원하기</StyledLink>
        </MenuWrapper>
        <CategoryLine />
        <MenuWrapper
          className={menu.menu ? 'appMenuActive ' : 'appMenuCategory'}
          onClick={() => {
            closeMenu();
            history.push('/conduct');
          }}
        >
          <StyledLink to={'/conduct'}>Code of Conduct</StyledLink>
        </MenuWrapper>
        <CategoryLine />
        <MenuWrapper
          className={menu.menu ? 'appMenuActive ' : 'appMenuCategory'}
          onClick={() => {
            closeMenu();
            history.push('/question');
          }}
        >
          <StyledLink to={'/question'}>자주하는 질문</StyledLink>
        </MenuWrapper>
        <CategoryLine />
      </MenuInner>
    </Menu>
  );
};

export default MoblieMenu;
