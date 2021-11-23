import React, { useEffect, useState } from 'react';
import { NavTask, NavTaskWrapper, StyledLink, WideNavigation } from '../styled';
import { useLocation } from 'react-router';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';

const WideNavCategory = () => {
  const locaton = useLocation<string>();
  const [routeStyle, setRoutStyle] = useState<string>();

  useEffect(() => {
    setRoutStyle(locaton.pathname);
  });
  return (
    <>
      <WideNavigation>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink
              to={'/introduce'}
              className={routeStyle == '/introduce' ? 'active' : 'noneActive'}
            >
              소개
            </StyledLink>
          </NavTask>
          {/*<NavTask>*/}
          {/*  <StyledLink*/}
          {/*    to={'/blog'}*/}
          {/*    className={routeStyle == 'blog' ? 'active' : 'noneActive'}*/}
          {/*    onClick={() => {*/}
          {/*      setRoutStyle('blog');*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    블로그*/}
          {/*  </StyledLink>*/}
          {/*</NavTask>*/}
          <NavTask>
            <StyledLink
              to={'/joinus'}
              className={routeStyle == '/joinus' ? 'active' : 'noneActive'}
            >
              지원하기
            </StyledLink>
          </NavTask>
          <NavTask>
            <StyledLink
              to={'/conduct'}
              className={routeStyle == '/conduct' ? 'active' : 'noneActive'}
            >
              Code of Conduct
            </StyledLink>
          </NavTask>
        </NavTaskWrapper>
        {/*<NavTaskWrapper>*/}
        {/*  {status.loggedIn ? (*/}
        {/*    <NavTask>Hello {userData.nickname}</NavTask>*/}
        {/*  ) : (*/}
        {/*    <NavTask>*/}
        {/*      <StyledLink to={'/signin'}>로그인</StyledLink>*/}
        {/*    </NavTask>*/}
        {/*  )}*/}
        {/*</NavTaskWrapper>*/}
      </WideNavigation>
    </>
  );
};

export default WideNavCategory;
