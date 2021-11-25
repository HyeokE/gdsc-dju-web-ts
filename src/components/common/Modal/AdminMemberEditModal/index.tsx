import React, { useState } from 'react';

import { SubTitle } from '../../Title/title';
import { ModalElementWrapper, StyledModal } from '../styled';
import { StyledInput } from '../../../Input/Input';
import { ButtonWrapper } from '../../../../pages/Admin/styled';
import { StyledButton } from '../../Button/styled';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../../api/hooks/modal';
import { dbService } from '../../../../firebase/firebase';

const AdminEditMemberModal = ({ selectMember }: any) => {
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('');
  const [warning, setWarning] = useState();
  const [position, setPosition] = useState();
  const [introduce, setIntroduce] = useState();
  const [modal, setModal] = useRecoilState(modalState);
  const editMemberProfile = () => {
    // dbService.collection('adminUsers').doc().get;
    try {
      dbService.collection('adminUsers').doc(selectMember).set({
        name: name,
        nickName: nickName,
        phoneNumber: phoneNumber,
        role: role,
        warning: warning,
        position: position,
        introduce: introduce,
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
    } else if (name === 'role') {
      setRole(value);
    } else if (name === 'warning') {
      setWarning(value);
    } else if (name === 'position') {
      setPosition(value);
    } else if (name === 'introduce') {
      setIntroduce(value);
    }
  };
  return (
    <div>
      <StyledModal
        size={'small'}
        isOpen={modal.adminEditMember}
        onRequestClose={() =>
          setModal({
            ...modal,
            [MODAL_KEY.ADMIN_EDIT_MEMBER]: false,
          })
        }
      >
        <SubTitle>멤버 정보 수정</SubTitle>
        <ModalElementWrapper>
          직책
          <StyledInput name={'role'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          이름
          <StyledInput name={'name'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          포지션
          <StyledInput name={'position'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          닉네임
          <StyledInput name={'nickName'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          전화번호
          <StyledInput name={'phoneNumber'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          한 줄 소개
          <StyledInput name={'introduce'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper>
          경고횟수
          <StyledInput name={'warning'} onChange={onChange} />
        </ModalElementWrapper>
        <ModalElementWrapper style={{ color: '#f44336' }}>
          {/*{error}*/}
        </ModalElementWrapper>
        <ButtonWrapper>
          <StyledButton
            onClick={() => {
              editMemberProfile();
            }}
          >
            수정하기
          </StyledButton>
        </ButtonWrapper>
      </StyledModal>
    </div>
  );
};

export default AdminEditMemberModal;
