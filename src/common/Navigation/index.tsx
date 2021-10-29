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
import { postState } from '../../store/post';
import { dbService } from '../../firebase/firebase';

const Navigation: React.FC = () => {
  const [routeStyle, setRoutStyle] = useState('home');
  const [post, setPost] = useRecoilState(postState);
  const getPost = () => {
    dbService.collection('posts').onSnapshot((snapshot) => {
      const postArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPost({ ...post, ...postArray });
      // localStorage.setItem('posts', JSON.stringify(postArray));
    });
  };
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
          <NavTask>
            <StyledLink
              to={'/blog'}
              className={routeStyle == 'blog' ? 'active' : 'noneActive'}
              onClick={() => {
                setRoutStyle('blog');
              }}
            >
              블로그
            </StyledLink>
          </NavTask>
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
        {/*  {isLoggedIn ? (*/}
        {/*    <NavTask>Hello {userObj.displayName}</NavTask>*/}
        {/*  ) : (*/}
        {/*    <NavTask>*/}
        {/*      <OpenedModal>프로필 만들기</OpenedModal>*/}
        {/*    </NavTask>*/}
        {/*  )}*/}

        {/*</NavTaskWrapper>*/}
      </NavInner>
    </NavDesign>
  );
};

export default Navigation;
