import React, { useEffect, useState } from 'react';
import {
  NavTask,
  NavTaskWrapper,
  StyledLink,
  WideNavigation,
} from '../DeskNavigation/styled';
import { useLocation } from 'react-router';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import { useNavigate } from 'react-router-dom';
import { navigationData } from '../DeskNavigation';

const WideNavCategory = ({ routeStyle }: any) => {
  const navigate = useNavigate();
  return (
    <>
      <WideNavigation>
        <NavTaskWrapper>
          {navigationData.map((data, id) => (
            <NavTask key={id}>
              <StyledLink
                onClick={() => {
                  navigate(data.route);
                }}
                className={routeStyle == data.route ? 'active' : 'noneActive'}
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
