import React from 'react';
import {
  AuthBackground,
  AuthBoxInner,
  AuthBoxWrapper,
  AuthButtonWrapper,
  AuthElementWrapper,
  AuthInput,
  AuthLine,
  AuthLinkText,
  AuthLogoText,
  AuthOtherText,
  AuthSignButton,
  AuthSubTitle,
  AuthTitle,
  GDSCLogoImage,
  OAuthButton,
  OAuthImage,
  OAuthText,
} from './styled';
import GDSCImage from '../../../img/GDSCLogoClear.svg';
import officeImage from '../../../img/auth/authBackground.jpg';
import GoogleLogo from '../../../img/GoogleLogo.svg';
import GithubLogo from '../../../img/GithubLogo.svg';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <AuthBackground route={officeImage}>
        <AuthBoxWrapper>
          <AuthBoxInner>
            <AuthElementWrapper align={'center'}>
              <GDSCLogoImage src={GDSCImage} />
              <AuthLogoText border={'bold'}>GDSC</AuthLogoText>
              <AuthLogoText>Daejin Univ.</AuthLogoText>
            </AuthElementWrapper>
            <AuthElementWrapper align={'center'}>
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
            <AuthElementWrapper direction={'column'}>
              <AuthSubTitle>이메일 주소</AuthSubTitle>
              <AuthInput type={'email'} />
            </AuthElementWrapper>
            <AuthElementWrapper direction={'column'}>
              <AuthSubTitle>비밀번호</AuthSubTitle>
              <AuthInput type={'password'} />
            </AuthElementWrapper>
            <AuthButtonWrapper>
              <AuthSignButton>로그인</AuthSignButton>
            </AuthButtonWrapper>
            <AuthElementWrapper align={'center'}>
              <AuthLine />
              <AuthOtherText>또는</AuthOtherText>
              <AuthLine />
            </AuthElementWrapper>
            <AuthElementWrapper>
              <OAuthButton>
                <OAuthImage src={GoogleLogo} />
                <OAuthText weight={'bold'}>Google</OAuthText>
                <OAuthText>로 계속</OAuthText>
              </OAuthButton>
            </AuthElementWrapper>
            <AuthElementWrapper>
              <OAuthButton>
                <OAuthImage src={GithubLogo} />
                <OAuthText weight={'bold'}>Github</OAuthText>
                <OAuthText>로 계속</OAuthText>
              </OAuthButton>
            </AuthElementWrapper>
          </AuthBoxInner>
        </AuthBoxWrapper>
      </AuthBackground>
    </>
  );
};

export default SignIn;
