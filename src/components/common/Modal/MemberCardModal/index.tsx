import React from 'react';
import { memberList } from '../../../../api/pageData/MemberList';
import {
  MemberImg,
  Name,
  NickName,
  Role,
  Skeleton,
} from '../../card/MemberCard/styled';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import { MemberCardModalInner, StyledModal } from './styled';
import './MemberCard.css';

const MemberCardModal = (props: { id: number }) => {
  const { id } = props;
  const [modalHandler, setModalHandler] = useRecoilState(modalState);
  const { memberImg, nickName, name, introduce, role } = memberList[id];
  return (
    <>
      <StyledModal
        size={'small'}
        isOpen={modalHandler.memberCard}
        onRequestClose={() =>
          setModalHandler({ ...modalHandler, [MODAL_KEY.MEMBER_CARD]: false })
        }
      >
        <MemberCardModalInner>
          {memberImg ? <MemberImg src={memberImg} /> : <Skeleton />}
          <NickName>{nickName}</NickName>
          <Name>{name}</Name>
          <Role>{role}</Role>
          <Name>{introduce}</Name>
        </MemberCardModalInner>
      </StyledModal>
    </>
  );
};

export default MemberCardModal;
