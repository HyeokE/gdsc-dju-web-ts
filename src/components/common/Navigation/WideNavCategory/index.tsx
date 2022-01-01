import React, { useEffect, useState } from 'react';
import { NavTask, NavTaskWrapper, StyledLink, WideNavigation } from '../styled';
import { useLocation } from 'react-router';
import { useRecoilState } from 'recoil';
import { MENU_KEY, menuState } from '../../../../store/menu';
import { useNavigate } from 'react-router-dom';

const WideNavCategory = ({ routeStyle }: any) => {
  const navigate = useNavigate();
  return (
    <>
      <WideNavigation>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink
              onClick={() => {
                navigate('/introduce');
              }}
              className={routeStyle == '/introduce' ? 'active' : 'noneActive'}
            >
              소개
            </StyledLink>
          </NavTask>
          <NavTask>
            <StyledLink
              onClick={() => {
                navigate('/joinus');
              }}
              className={routeStyle == '/joinus' ? 'active' : 'noneActive'}
            >
              지원하기
            </StyledLink>
          </NavTask>
          <NavTask>
            <StyledLink
              onClick={() => {
                navigate('/conduct');
              }}
              className={routeStyle == '/conduct' ? 'active' : 'noneActive'}
            >
              Code of Conduct
            </StyledLink>
          </NavTask>
          <NavTask>
            <StyledLink
              onClick={() => {
                navigate('/faq');
              }}
              className={routeStyle == '/faq' ? 'active' : 'noneActive'}
            >
              자주하는 질문
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
