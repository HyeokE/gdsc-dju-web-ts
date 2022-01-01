import React from 'react';
import { StyledLink } from '../styled';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import { CategoryLine, Menu, MenuInner, MenuWrapper } from './styled';
import './MobileMenu.css';
import { useNavigate } from 'react-router-dom';
import {
  navigationAnimate,
  navigationItemAnimate,
} from '../../Variants/NavigationAnimation';
import { listAnimate, listItemAnimate } from '../../Variants/Variants';

const MobileMenuCategory = () => {
  const navigate = useNavigate();

  const mobileNavItems = [
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
      title: '자주하는 질문',
    },
  ];
  const [menu, setMenu] = useRecoilState(menuState);

  return (
    <MenuInner variants={navigationAnimate}>
      {mobileNavItems.map((item, id) => (
        <MenuWrapper
          variants={navigationItemAnimate}
          key={id}
          onClick={() => {
            navigate(item.route);
            setMenu({ ...menu, [MENU_KEY.APPMENU]: false });
          }}
        >
          <StyledLink>{item.title}</StyledLink>
        </MenuWrapper>
      ))}
    </MenuInner>
  );
};

export default MobileMenuCategory;
