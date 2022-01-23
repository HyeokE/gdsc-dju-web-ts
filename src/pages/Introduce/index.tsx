import React, { useState } from 'react';
import {
  BannerWrapper,
  CardList,
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';
import { MemberCard } from '../../components/common/card/MemberCard/';
import { MemberCardWrapper, StyledModal } from './styled';
import { MainText, SubTitle, Title } from '../../components/common/Title/title';
// import Modal from '../../components/common/Modal/index';
import {
  MemberImg,
  Name,
  NickName,
  Role,
} from '../../components/common/card/MemberCard/styled';
import { Skeleton } from '@mui/material';
import {
  listAnimate,
  memberCardAnimate,
} from '../../components/common/Variants/Variants';
import { Banner } from '../../img/Banner/Banner';
import YellowBanner from '../../img/Banner/YellowBanner.png';
import { introduceText, workWhenCome } from '../../api/pageData/introduceText';
import { memberList } from '../../api/pageData/MemberList';
import BulletList from '../../components/common/BulletList';

export const Introduce = () => {
  const [selectedMember, setSelectedMember] = useState<number>(0);
  const [modalHandler, setModalHandler] = useState(false);

  return (
    <>
      <StyledModal
        size={'small'}
        isOpen={modalHandler}
        onRequestClose={() => setModalHandler(false)}
      >
        {memberList[selectedMember].memberImg ? (
          <MemberImg src={memberList[selectedMember].memberImg} />
        ) : (
          <Skeleton variant={'circular'} height={200} width={200} />
        )}
        <NickName>{memberList[selectedMember].nickName}</NickName>
        <Name>{memberList[selectedMember].name}</Name>
        <Role>{memberList[selectedMember].role}</Role>
        <Name>{memberList[selectedMember].introduce}</Name>
      </StyledModal>
      <BannerWrapper>
        <Banner src={YellowBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />

          <Title>About us</Title>
          <TopMargin />
          <SubTitle>Google Developer Student Club 소개</SubTitle>
          {introduceText.split('\n').map((line, id) => {
            return (
              <MainText key={id}>
                {line}
                <br />
              </MainText>
            );
          })}

          <TopMargin />
          <SubTitle>합류하시면 함께할 활동입니다</SubTitle>
          <MainText>
            <BulletList text={workWhenCome} />
          </MainText>
          <TopMargin />
          <Title>팀 소개</Title>
          <TopMargin />
          <CardList variants={listAnimate} initial={'start'} animate={'end'}>
            {memberList.map((memberInfo, id) => (
              <MemberCardWrapper
                variants={memberCardAnimate}
                key={id}
                onClick={() => {
                  setSelectedMember(id);
                  setModalHandler(true);
                }}
              >
                <MemberCard memberInfo={memberInfo} />
              </MemberCardWrapper>
            ))}
          </CardList>
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
