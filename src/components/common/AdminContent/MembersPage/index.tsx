import React, { useEffect, useState } from 'react';
import { dbService } from '../../../../firebase/firebase';
import { MainText } from '../../Title/title';
import { UserDataState } from '../index';
import {
  MemberPageWrapper,
  MotionSelector,
  StyledColumn,
  StyledLargeColumn,
  StyledMobileTableCategoryWrapper,
  StyledMobileTableWrapper,
  StyledSmallColumn,
  StyledTableCategoryWrapper,
  StyledTableWrapper,
} from './styled';
import AdminEditMemberModal from '../../Modal/AdminMemberEditModal';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../../../api/hooks/modal';
import './MemberPage.css';

import { motion } from 'framer-motion';
import { listAnimate, listItemAnimate } from '../../../../styles/framer';

const MemberPage = () => {
  const [memberData, setMemberData] = useState<UserDataState[]>();
  const [selectMember, setSelectMember] = useState<UserDataState>();
  const [modal, setModal] = useRecoilState(modalState);
  const getMemberList = async () => {
    try {
      await dbService.collection('members').onSnapshot((data) => {
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
      <AdminEditMemberModal
        selectMember={selectMember}
        setSelectMember={setSelectMember}
      />
      <div>
        <MainText>Total • {memberData?.length}</MainText>
      </div>
      <MemberPageWrapper>
        <StyledTableCategoryWrapper>
          <StyledSmallColumn>Name</StyledSmallColumn>
          <StyledColumn>nickName</StyledColumn>
          <StyledLargeColumn>Email</StyledLargeColumn>
          <StyledSmallColumn>Position</StyledSmallColumn>
          <StyledSmallColumn>Warn Count</StyledSmallColumn>
        </StyledTableCategoryWrapper>
        <MotionSelector variants={listAnimate} initial="start" animate="end">
          {memberData?.map((data: any, id) => (
            <StyledTableWrapper
              variants={listItemAnimate}
              key={id}
              className={
                (data?.warning as number) == 0
                  ? 'count0'
                  : (data?.warning as number) == 1
                  ? 'count1'
                  : (data?.warning as number) == 2
                  ? 'count2'
                  : (data?.warning as number) == 3
                  ? 'count3'
                  : 'none'
              }
              onClick={() => {
                setSelectMember(data);
                setModal({ ...modal, [MODAL_KEY.ADMIN_EDIT_MEMBER]: true });
              }}
            >
              <StyledSmallColumn>{data.name}</StyledSmallColumn>
              <StyledColumn>{data.nickName}</StyledColumn>
              <StyledLargeColumn>{data.email}</StyledLargeColumn>
              <StyledSmallColumn>{data.position}</StyledSmallColumn>
              <StyledSmallColumn>{data.warning}</StyledSmallColumn>
            </StyledTableWrapper>
          ))}
        </MotionSelector>
        <StyledMobileTableCategoryWrapper>
          <StyledColumn>Nickname</StyledColumn>
          <StyledSmallColumn>Name</StyledSmallColumn>
          <StyledSmallColumn>Position</StyledSmallColumn>
          <StyledSmallColumn>Warn</StyledSmallColumn>
        </StyledMobileTableCategoryWrapper>
        <MotionSelector variants={listAnimate} initial="start" animate="end">
          {memberData?.map((data: any, id) => (
            <StyledMobileTableWrapper
              variants={listItemAnimate}
              key={id}
              className={
                (data?.warning as number) == 0
                  ? 'count0'
                  : (data?.warning as number) == 1
                  ? 'count1'
                  : (data?.warning as number) == 2
                  ? 'count2'
                  : (data?.warning as number) == 3
                  ? 'count3'
                  : 'none'
              }
              onClick={() => {
                setSelectMember(data);
                setModal({ ...modal, [MODAL_KEY.ADMIN_EDIT_MEMBER]: true });
              }}
            >
              <StyledColumn>{data.nickName}</StyledColumn>
              <StyledSmallColumn>{data.name}</StyledSmallColumn>
              <StyledSmallColumn>{data.position}</StyledSmallColumn>
              <StyledSmallColumn>{data.warning}</StyledSmallColumn>
            </StyledMobileTableWrapper>
          ))}
        </MotionSelector>
      </MemberPageWrapper>
    </>
  );
};

export default MemberPage;
