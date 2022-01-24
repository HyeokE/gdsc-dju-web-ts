import React from 'react';
import { memberList } from '../../../../api/pageData/MemberList';
import { MemberImg, Name, NickName, Role } from '../../card/MemberCard/styled';
import { Skeleton } from '@mui/material';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../../store/modal';
import { MemberCardModalInner, StyledModal } from './styled';
import './MemberCard.css';

const MemberCardModal = (props: { id: number }) => {
  const { id } = props;
  const [modalHandler, setModalHandler] = useRecoilState(modalState);
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
          {memberList[id].memberImg ? (
            <MemberImg src={memberList[id].memberImg} />
          ) : (
            <Skeleton variant={'circular'} height={200} width={200} />
          )}
          <NickName>{memberList[id].nickName}</NickName>
          <Name>{memberList[id].name}</Name>
          <Role>{memberList[id].role}</Role>
          <Name>{memberList[id].introduce}</Name>
        </MemberCardModalInner>
      </StyledModal>
    </>
  );
};

export default MemberCardModal;
