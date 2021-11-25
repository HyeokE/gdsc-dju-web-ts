import React, { useEffect, useState } from 'react';
import { dbService } from '../../../../firebase/firebase';
import { MainText } from '../../Title/title';
import { Column, TableWithBrowserPagination } from 'react-rainbow-components';
import { UserDataState } from '../index';
import {
  MemberPageWrapper,
  StyledColumn,
  StyledLargeColumn,
  StyledMobileTableCategoryWrapper,
  StyledMobileTableWrapper,
  StyledSmallColumn,
  StyledTableCategoryWrapper,
  StyledTableWrapper,
} from './styled';

const MemberPage = () => {
  const [memberData, setMemberData] = useState<UserDataState[]>();
  const [selectMember, setSelectMember] = useState<string | undefined>('');
  const getMemberList = () => {
    try {
      dbService.collection('members').onSnapshot((data) => {
        const memberList: any = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMemberData(memberList);
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMemberList();
  }, []);
  return (
    <>
      <div>
        <MainText>Total • {memberData?.length}</MainText>
      </div>
      <MemberPageWrapper>
        <StyledTableCategoryWrapper>
          <StyledColumn>Role</StyledColumn>
          <StyledSmallColumn>Name</StyledSmallColumn>
          <StyledLargeColumn>Email</StyledLargeColumn>
          <StyledSmallColumn>Position</StyledSmallColumn>
          <StyledSmallColumn>Warn Count</StyledSmallColumn>
        </StyledTableCategoryWrapper>
        {memberData?.map((data) => (
          <StyledTableWrapper
            key={data.id}
            onClick={() => {
              setSelectMember(data.id);
            }}
          >
            <StyledColumn>{data.role}</StyledColumn>
            <StyledSmallColumn>{data.name}</StyledSmallColumn>
            <StyledLargeColumn>{data.email}</StyledLargeColumn>
            <StyledSmallColumn>{data.position}</StyledSmallColumn>
            <StyledSmallColumn>{data.warning}</StyledSmallColumn>
          </StyledTableWrapper>
        ))}
        <StyledMobileTableCategoryWrapper>
          <StyledColumn>Nickname</StyledColumn>
          <StyledSmallColumn>Name</StyledSmallColumn>
          <StyledSmallColumn>Position</StyledSmallColumn>
          <StyledSmallColumn>Warn</StyledSmallColumn>
        </StyledMobileTableCategoryWrapper>
        {memberData?.map((data) => (
          <StyledMobileTableWrapper
            key={data.id}
            onClick={() => {
              setSelectMember(data.id);
            }}
          >
            <StyledColumn>{data.nickName}</StyledColumn>
            <StyledSmallColumn>{data.name}</StyledSmallColumn>
            <StyledSmallColumn>{data.position}</StyledSmallColumn>
            <StyledSmallColumn>{data.warning}</StyledSmallColumn>
          </StyledMobileTableWrapper>
        ))}
      </MemberPageWrapper>
    </>
  );
};

export default MemberPage;