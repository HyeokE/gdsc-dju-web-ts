import React from 'react';
import {
  MemberImg,
  Name,
  NickName,
  Role,
  Skeleton,
} from '../../card/MemberCard/styled';
import { MemberCardModalInner, ModalWrapper, StyledModal } from './styled';
import './MemberCard.css';
import { memberDataType } from '../../../../types/member';
import OutsideClickHandler from '../../../../utils/OutsideClickHandler';

interface Iprops extends memberDataType {
  setSelectedId: (num: number | undefined) => void;
}

const MemberCardModal = (props: Iprops) => {
  const { name, nickname, role, memberImg, introduce, setSelectedId } = props;
  return (
    <ModalWrapper>
      <OutsideClickHandler outsideClick={() => setSelectedId(undefined)}>
        <StyledModal>
          <MemberCardModalInner>
            {memberImg ? <MemberImg src={memberImg} /> : <Skeleton />}
            <NickName>{nickname}</NickName>
            <Name>{name}</Name>
            <Role>{role}</Role>
            <Name>{introduce}</Name>
          </MemberCardModalInner>
        </StyledModal>
      </OutsideClickHandler>
    </ModalWrapper>
  );
};

export default MemberCardModal;
