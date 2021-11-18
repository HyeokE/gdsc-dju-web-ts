import React, { useState } from 'react';
import { SubTitle } from '../../Title/title';
import { StyledInput } from '../../../Input/Input';
import { ButtonWrapper } from '../../../../pages/Admin/styled';
import { StyledButton } from '../../Button/styled';
import { Modal } from 'react-rainbow-components';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../../api/hooks/modal';
import { authService } from '../../../../firebase/firebase';
import { ModalElementWrapper } from '../styled';

const AdminSignUpModal = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

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
  const onRegisterIn = async (e: any) => {
    e.preventDefault();
    authService
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
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
  return (
    <>
      <Modal
        size={'small'}
        style={{ display: 'flex', padding: '10px', width: 400 }}
        isOpen={modal.adminSignUp}
      >
        <ModalElementWrapper>
          <SubTitle>Admin Signup</SubTitle>
        </ModalElementWrapper>
        <ModalElementWrapper>
          이메일
          <StyledInput
            name={'email'}
            onChange={onChange}
            placeholder={'Email'}
          />
        </ModalElementWrapper>
        <ModalElementWrapper>
          비밀번호
          <StyledInput
            name={'password'}
            onChange={onChange}
            placeholder={'Password'}
          />
        </ModalElementWrapper>
        <ModalElementWrapper>
          이름
          <StyledInput name={'name'} onChange={onChange} placeholder={'Name'} />
        </ModalElementWrapper>
        <ModalElementWrapper style={{ color: '#f44336' }}>
          {error}
        </ModalElementWrapper>
        <ButtonWrapper>
          <StyledButton onClick={onRegisterIn}>Admin Signup</StyledButton>
        </ButtonWrapper>
      </Modal>
    </>
  );
};

export default AdminSignUpModal;
