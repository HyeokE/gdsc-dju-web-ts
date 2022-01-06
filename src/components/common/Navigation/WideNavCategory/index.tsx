import React, { useEffect, useState } from 'react';
import { NavTask, NavTaskWrapper, StyledLink, WideNavigation } from '../styled';
import { useLocation } from 'react-router';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import { useNavigate } from 'react-router-dom';

const WideNavCategory = ({ routeStyle }: any) => {
  const routeData = [
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
      title: 'code of conduct',
    },
    {
      route: '/faq',
      title: '자주 하는 질문',
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <WideNavigation>
        <NavTaskWrapper>
          {routeData.map((data, id) => (
            <NavTask>
              <StyledLink
                onClick={() => {
                  navigate(data.route);
                }}
                className={routeStyle == data.title ? 'active' : 'noneActive'}
              >
                {data.title}
              </StyledLink>
            </NavTask>
          ))}
        </NavTaskWrapper>
      </WideNavigation>
    </>
  );
};

export default WideNavCategory;
