import React, { useState } from 'react';
import {
  AuthBackground,
  AuthBoxInner,
  AuthBoxWrapper,
  AuthButtonWrapper,
  AuthElementWrapper,
  AuthErrorText,
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
import GDSCImage from '../../../img/GDSCLogo.svg';
import officeImage from '../../../img/auth/AuthBackground.jpg';
import officeImage1 from '../../../img/auth/AuthBackground1.jpg';
import GoogleLogo from '../../../img/GoogleLogo.svg';
import GithubLogo from '../../../img/GithubLogo.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../store/modal';
import { authService, dbService } from '../../../firebase/firebase';
import { localUserState } from '../../../store/localUser';
import { loaderState } from '../../../store/loader';

const SignIn = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [adminUser, setAdminUser] = useRecoilState(localUserState);
  const [loader, setLoader] = useRecoilState(loaderState);

  const checkAdminUser = () => {
    authService.onAuthStateChanged((user: any) => {
      if (user) {
        setAdminUser({
          ...adminUser,
          uid: user.uid,
        });

        try {
          dbService
            .collection('adminUsers')
            .doc(user.uid)
            .get()
            .then((data) => {
              navigate('/admin');
            });
        } catch (e: any) {
          console.log(e.message);
        }
      }
    });
  };
  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onEmailLogIn();
    }
  };
  const onEmailLogIn = () => {
    try {
      authService.signInWithEmailAndPassword(email, password).catch((error) => {
        const { code } = error;
        switch (code) {
          case 'auth/email-already-in-use':
            return setError('이미 사용 중인 이메일입니다.');
          case 'auth/invalid-email':
            return setError(
              '해당 이메일 주소로 등록된 계정을 찾을 수 없습니다.',
            );
          case 'operation-not-allowed':
            return setError('이메일 가입이 중지되었습니다.');
          case 'auth/weak-password':
            return setError('비밀번호를 6자리 이상 입력하세요.');
          case 'auth/user-not-found':
            return setError('올바르지 않은 유저정보입니다.');
          case 'auth/wrong-password':
            return setError('올바르지 않은 비밀번호입니다.');
          default:
            console.log(error.message);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onChange = (e: any) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <>
      <AuthBackground route={officeImage1}>
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
            <AuthElementWrapper direction={'column'}>
              <AuthSubTitle>이메일 주소</AuthSubTitle>
              <AuthLinkText
                onClick={() => {
                  navigate('/');
                }}
              >
                계정 만들기
              </AuthLinkText>
              <AuthInput
                type={'email'}
                name={'email'}
                onKeyPress={onKeyPress}
                onChange={onChange}
                placeholder={'gdsc@gmail.com'}
              />
            </AuthElementWrapper>
            <AuthElementWrapper direction={'column'}>
              <AuthSubTitle>비밀번호</AuthSubTitle>
              <AuthInput
                type={'password'}
                name={'password'}
                onKeyPress={onKeyPress}
                onChange={onChange}
              />
            </AuthElementWrapper>
            <AuthErrorText>{error}</AuthErrorText>
            <AuthButtonWrapper>
              <AuthSignButton
                onClick={() => {
                  try {
                    setLoader({ ...loader, load: true });
                    onEmailLogIn();
                    checkAdminUser();
                  } catch (e) {
                    console.log(e);
                  }
                  setLoader({ ...loader, load: false });
                }}
              >
                로그인
              </AuthSignButton>
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
