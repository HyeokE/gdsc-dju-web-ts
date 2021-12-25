import React, { useState } from 'react';
import {
  CardList,
  ContainerInner,
  LayoutContainer,
  List,
  Tage,
  TopMargin,
} from '../../styles/layouts';
import { MemberCard } from '../../components/common/card/MemberCard/';
import { MemberCardWrapper, StyledModal } from './styled';

import { BannerWrapper } from '../../styles/layouts';
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
  listTageItemAnimate,
  memberCardAnimate,
  titleAnimate,
  titleItemAnimate,
  topToBottomAnimate,
} from '../../components/common/Variants/Variants';
import { Banner } from '../../img/Banner/Banner';
import YellowBanner from '../../img/Banner/YellowBanner.png';
import { introduceText, workWhenCome } from '../../api/introduceText';
import { motion } from 'framer-motion';
import { memberList } from '../../api/MemberList';

export const Introduce = () => {
  const [selectedMember, setSelectedMember] = useState<number>(0);
  const [modalHandler, setModalHandler] = useState(false);

  return (
    <>
      {/*Modal*/}
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
            {workWhenCome.split('\n').map((line, id) => (
              <List key={id}>
                <Tage />
                {line}
              </List>
            ))}
          </MainText>
          <TopMargin />

          <Title>팀 소개</Title>
          <TopMargin />
          <CardList variants={listAnimate}>
            {memberList.map((memberInfo, id) => (
              <MemberCardWrapper
                variants={memberCardAnimate}
                initial={'offView'}
                whileInView={'onView'}
                viewport={{ once: true, amount: 0.8 }}
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
