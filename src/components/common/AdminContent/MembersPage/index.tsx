import React, { useEffect, useState } from 'react';
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
import { MODAL_KEY, modalState } from '../../../../store/modal';
import './MemberPage.css';
import { listAnimate, listItemAnimate } from '../../Variants/Variants';
import { UserDataField, UserDataRow } from '../../../../api/types';
import { useGetMemberList } from '../../../../api/hooks/useGetMemberData';
import { dbService } from '../../../../firebase/firebase';

const MemberPage = () => {
  const [memberData, setMemberData] = useState<UserDataState[]>();
  const [selectMember, setSelectMember] = useState<UserDataState>();
  const [modal, setModal] = useRecoilState(modalState);

  //유저 데이터 sort 기능 제작
  const [sortBy, setSortBy] = useState('count');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const { data: memberList } = useGetMemberList();
  // const memberList = data.fields;
  const reduceSorter = (
    key: keyof UserDataField,
    sortDirection: 'asc' | 'desc',
  ) => {
    return (a: UserDataRow, b: UserDataRow) => {
      const nextSortDirectionNumber = sortDirection === 'asc' ? 1 : -1;
      switch (key) {
        case 'warning':
          return (
            (a.fields.warning - b.fields.warning) * nextSortDirectionNumber
          );
        case 'nickName':
          return (
            a.fields.nickName.localeCompare(b.fields.nickName) *
            nextSortDirectionNumber
          );
        case 'name':
          return (
            a.fields.name.localeCompare(b.fields.name) * nextSortDirectionNumber
          );
        case 'email':
          return (
            a.fields.email.localeCompare(b.fields.email) *
            nextSortDirectionNumber
          );
        default:
          return nextSortDirectionNumber;
      }
    };
  };

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

      {memberData && (
        <>
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
            <MotionSelector
              variants={listAnimate}
              initial="start"
              animate="end"
            >
              {memberData?.map((data: any, id) => (
                <StyledTableWrapper
                  variants={listItemAnimate}
                  whileHover={{ backgroundColor: '#efefef', color: '#3886f6' }}
                  key={id}
                  className={
                    (data.warning as number) == 0
                      ? 'count0'
                      : (data.warning as number) == 1
                      ? 'count1'
                      : (data.warning as number) == 2
                      ? 'count2'
                      : (data.warning as number) < 3 &&
                        (data.warning as number) > 2
                      ? 'count3'
                      : ''
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
            <MotionSelector
              variants={listAnimate}
              initial="start"
              animate="end"
            >
              {memberData?.map((data: any, id) => (
                <StyledMobileTableWrapper
                  variants={listItemAnimate}
                  whileHover={{ backgroundColor: '#f2f4f6' }}
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
      )}
    </>
  );
};

export default MemberPage;
