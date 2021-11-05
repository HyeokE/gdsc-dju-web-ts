import React from 'react';
import { Skeleton } from '@mui/material';
import { Name, NickName, Role, StyledMemberCard, MemberImg } from './styled';
interface memberinfo {
  nickName: string;
  name: string;
  role: string;
}

export const MemberCard = ({ memberInfo }: any) => {
  return (
    <>
      <StyledMemberCard>
        {memberInfo.memberImg ? (
          <MemberImg src={memberInfo.memberImg} />
        ) : (
          <Skeleton variant={'circular'} height={200} width={200} />
        )}

        <NickName>{memberInfo.nickName}</NickName>
        <Name>{memberInfo.name}</Name>
        <Role>{memberInfo.role}</Role>
      </StyledMemberCard>
    </>
  );
};
