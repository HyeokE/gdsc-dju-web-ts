import React from 'react';
import { Skeleton } from '@mui/material';
import { Name, NickName, Role, StyledMemberCard } from './styled';
interface memberinfo {
  nickName: string;
  name: string;
  role: string;
}

export const MemberCard = ({ memberInfo }: any) => {
  return (
    <>
      <StyledMemberCard>
        <Skeleton variant="circular" width={200} height={200} />
        <NickName>{memberInfo.nickName}</NickName>
        <Name>{memberInfo.name}</Name>
        <Role>{memberInfo.role}</Role>
      </StyledMemberCard>
    </>
  );
};
