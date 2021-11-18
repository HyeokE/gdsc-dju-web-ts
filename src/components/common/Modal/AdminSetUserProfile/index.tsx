import React from 'react';
import { SubTitle } from '../../Title/title';
import { ModalElementWrapper } from '../styled';
import { StyledInput } from '../../../Input/Input';
import { ButtonWrapper } from '../../../../pages/Admin/styled';
import { StyledButton } from '../../Button/styled';
import { Modal } from 'react-rainbow-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState } from '../../../../api/hooks/modal';
import { dbService } from '../../../../firebase/firebase';

const AdminSetUserProfile = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modal, setModal] = useRecoilState(modalState);

  const setUserProfile = () => {
    dbService.collection('adminUsers').doc();
  };
  const onChange = (e: any) => {
    console.log(e.target.name);
    const {
      target: { name, value },
    } = e;
    if (name === 'name') {
      setName(value);
    } else if (name === 'nickName') {
      setNickName(value);
    } else if (name === 'phoneNumber') {
      setPhoneNumber(value);
    }
  };
  return (
    <div>
      <Modal
        size={'small'}
        isOpen={modal.adminSetProfile}
        style={{ display: 'flex', padding: '10px', width: 400 }}
      >
        <SubTitle>Admin Profile</SubTitle>
        <ModalElementWrapper>
          이름
          <StyledInput name={'name'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          닉네임
          <StyledInput name={'nickName'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          전화번호
          <StyledInput name={'phoneNumber'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper style={{ color: '#f44336' }}>
          {/*{error}*/}
        </ModalElementWrapper>
        <ButtonWrapper>
          <StyledButton>Admin SignIn</StyledButton>
        </ButtonWrapper>
      </Modal>
    </div>
  );
};

export default AdminSetUserProfile;
