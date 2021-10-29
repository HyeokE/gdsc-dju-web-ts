import React, { useState } from 'react';

import {
  NavDesign,
  NavInner,
  NavTask,
  StyledLink,
  NavTaskWrapper,
  StyledLogoWrapper,
  StyledImg,
  StyledLogo,
} from './styled';
import { useRecoilState } from 'recoil';
import { statusState } from '../../store/status';
import { userDataState } from '../../store/user';
import { LayoutContainer } from '../../Layout';

const Navigation: React.FC = () => {
  const [routeStyle, setRoutStyle] = useState('home');
  const [status, setStaus] = useRecoilState(statusState);
  const [userData, setUserData] = useRecoilState(userDataState);

  return (
    <NavDesign>
      <NavInner>
        <NavTaskWrapper>
          <NavTask>
            <StyledLogoWrapper
              to={'/'}
              onClick={() => {
                setRoutStyle('home');
                console.log(routeStyle);
              }}
            >
              <StyledImg
                src={process.env.PUBLIC_URL + '/GDSCLogoClear.png'}
                alt="GDSC-Chapter-Logo"
                height={40}
              />
              <StyledLogo>GDSC </StyledLogo>
              <div>Daejin Univ.</div>
            </StyledLogoWrapper>
          </NavTask>
        </NavTaskWrapper>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink
              to={'/introduce'}
              className={routeStyle == 'introduce' ? 'active' : 'noneActive'}
              onClick={() => {
                setRoutStyle('introduce');
              }}
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
              className={routeStyle == 'joinus' ? 'active' : 'noneActive'}
              onClick={() => {
                setRoutStyle('joinus');
              }}
            >
              지원하기
            </StyledLink>
          </NavTask>
          <NavTask>
            <StyledLink
              to={'/conduct'}
              className={routeStyle == 'conduct' ? 'active' : 'noneActive'}
              onClick={() => {
                setRoutStyle('conduct');
              }}
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
      </NavInner>
    </NavDesign>
  );
};

export default Navigation;
