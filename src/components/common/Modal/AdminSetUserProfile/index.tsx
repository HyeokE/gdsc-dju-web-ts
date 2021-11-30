import React from 'react';
import { SubTitle } from '../../Title/title';
import { ModalElementWrapper } from '../styled';
import { StyledInput } from '../../../Input/Input';
import { ButtonWrapper } from '../../../../pages/Admin/styled';
import { StyledButton } from '../../Button/styled';
import { Modal } from 'react-rainbow-components';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../../api/hooks/modal';
import { dbService } from '../../../../firebase/firebase';
import { userState } from '../../../../api/hooks/user';

const AdminSetUserProfile = () => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modal, setModal] = useRecoilState(modalState);
  const [adminUser, setAdminUser] = useRecoilState(userState);

  const setUserProfile = () => {
    // dbService.collection('adminUsers').doc().get;
    try {
      dbService
        .collection('adminUsers')
        .doc(adminUser.uid)
        .set({
          name: name,
          nickName: nickName,
          phoneNumber: phoneNumber,
        })
        .then(() => {
          setAdminUser({
            ...adminUser,
            nickName: nickName,
            name: name,
            phoneNumber: phoneNumber,
          });
        });
      setModal({ ...modal, [MODAL_KEY.ADMIN_SET_PROFILE]: false });
    } catch (e) {
      console.log(e);
    }
  };
  const onChange = (e: any) => {
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
          <StyledButton
            onClick={() => {
              setUserProfile();
            }}
          >
            Admin SignIn
          </StyledButton>
        </ButtonWrapper>
      </Modal>
    </div>
  );
};

export default AdminSetUserProfile;
