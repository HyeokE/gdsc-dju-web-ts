import React, { useState } from 'react';
import { SubTitle } from '../../Title/title';
import { StyledInput } from '../../../Input/Input';
import { ButtonWrapper } from '../../../../pages/Admin/styled';
import { StyledButton } from '../../Button/styled';
import { Modal } from 'react-rainbow-components';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../../api/hooks/modal';
import { ModalElementWrapper } from '../styled';
import { authService } from '../../../../firebase/firebase';

const AdminSignInModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const onEmailLogIn = async (e: any) => {
    //submit 함수는 새로고침하는 문제를 preventDefault를 사용해 방지
    e.preventDefault();
    authService
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user.user);
      })
      .catch((error) => {
        if (error.code == 'auth/email-already-in-use') {
          setError('이미 사용 중인 이메일입니다.');
        } else if (error.code == 'auth/invalid-email') {
          setError('유효하지 않은 이메일입니다.');
        } else if (error.code == 'operation-not-allowed') {
          setError('이메일 가입이 중지되었습니다.');
        } else if (error.code == 'auth/weak-password') {
          setError('비밀번호를 6자리 이상 입력하세요.');
        }
      });
  };

  const onChange = (e: any) => {
    console.log(e.target.name);
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
      <Modal
        size={'small'}
        isOpen={modal.adminSignIn}
        style={{ display: 'flex', padding: '10px', width: 400 }}
      >
        <SubTitle>Admin SignIn</SubTitle>
        <ModalElementWrapper>
          이메일
          <StyledInput name={'email'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          비밀번호
          <StyledInput name={'password'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper style={{ color: '#f44336' }}>
          {error}
        </ModalElementWrapper>
        <ButtonWrapper>
          <StyledButton onClick={onEmailLogIn}>Admin SignIn</StyledButton>
        </ButtonWrapper>
      </Modal>
    </>
  );
};

export default AdminSignInModal;
