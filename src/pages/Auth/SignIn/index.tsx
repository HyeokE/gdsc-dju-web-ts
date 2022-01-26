import React from 'react';
import {
  AuthBackground,
  AuthBoxInner,
  AuthBoxWrapper,
  AuthElementWrapper,
  AuthLinkText,
  AuthLogoText,
  AuthSubTitle,
  AuthTitle,
  GDSCLogoImage,
} from './styled';
import GDSCImage from '../../../img/GDSCLogoClear.svg';
import officeImage from '../../../img/auth/authBackground.jpg';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <AuthBackground route={officeImage}>
        <AuthBoxWrapper>
          <AuthBoxInner>
            <AuthElementWrapper>
              <GDSCLogoImage src={GDSCImage} />
              <AuthLogoText border={'bold'}>GDSC</AuthLogoText>
              <AuthLogoText>Daejin Univ.</AuthLogoText>
            </AuthElementWrapper>
            <AuthElementWrapper>
              <AuthTitle>로그인</AuthTitle>
            </AuthElementWrapper>
            <AuthElementWrapper>
              <AuthSubTitle>계정이 없으신가요?</AuthSubTitle>
              <AuthLinkText
                onClick={() => {
                  navigate('/');
                }}
              >
                계정 만들기
              </AuthLinkText>
            </AuthElementWrapper>
          </AuthBoxInner>
        </AuthBoxWrapper>
      </AuthBackground>
    </>
  );
};

export default SignIn;
