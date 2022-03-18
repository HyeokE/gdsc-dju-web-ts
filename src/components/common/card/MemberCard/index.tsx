import React from 'react';
import {
  Name,
  NickName,
  Role,
  StyledMemberCard,
  MemberImg,
  Skeleton,
} from './styled';
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
          <Skeleton />
        )}
        <NickName>{memberInfo.nickName}</NickName>
        <Name>{memberInfo.name}</Name>
        <Role>{memberInfo.role}</Role>
      </StyledMemberCard>
    </>
  );
};
