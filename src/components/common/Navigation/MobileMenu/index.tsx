import React from 'react';
import { StyledLink } from '../styled';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import { CategoryLine, Menu, MenuInner, MenuWrapper } from './styled';
import './MobileMenu.css';
import { useNavigate } from 'react-router-dom';

const MoblieMenu = () => {
  const [menu, setMenu] = useRecoilState(menuState);
  const navigate = useNavigate();

  const closeMenu = () => setMenu({ ...menu, [MENU_KEY.APPMENU]: false });

  return (
    <Menu className={menu.menu ? 'appMenu active' : 'appMenu'}>
      <MenuInner>
        <MenuWrapper />
        <MenuWrapper
          className={menu.menu ? ' appMenuActive ' : 'appMenuCategory'}
          onClick={() => {
            closeMenu();
            navigate('/introduce');
          }}
        >
          <StyledLink to={'/introduce'}>소개</StyledLink>
        </MenuWrapper>
        <CategoryLine />
        <MenuWrapper
          className={menu.menu ? ' appMenuActive' : 'appMenuCategory'}
          onClick={() => {
            closeMenu();
            navigate('/joinus');
          }}
        >
          <StyledLink to={'/joinus'}>지원하기</StyledLink>
        </MenuWrapper>
        <CategoryLine />
        <MenuWrapper
          className={menu.menu ? 'appMenuActive ' : 'appMenuCategory'}
          onClick={() => {
            closeMenu();
            navigate('/conduct');
          }}
        >
          <StyledLink to={'/conduct'}>Code of Conduct</StyledLink>
        </MenuWrapper>
        <CategoryLine />
        <MenuWrapper
          className={menu.menu ? 'appMenuActive ' : 'appMenuCategory'}
          onClick={() => {
            closeMenu();
            navigate('/question');
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
