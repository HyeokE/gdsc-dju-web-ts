import React, { useState } from 'react';
import {
  BannerWrapper,
  CardList,
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';
import { MemberCard } from '../../components/common/card/MemberCard/';
import { MemberCardWrapper } from './styled';
import { MainText, SubTitle, Title } from '../../components/common/Title/title';
import {
  listAnimate,
  memberCardAnimate,
} from '../../components/common/Variants/Variants';
import { Banner } from '../../img/Banner/Banner';
import YellowBanner from '../../img/Banner/YellowBanner.png';
import { introduceText, workWhenCome } from '../../api/pageData/introduceText';
import { memberList } from '../../api/pageData/MemberList';
import BulletList from '../../components/common/BulletList';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../store/modal';
import MemberCardModal from '../../components/common/Modal/MemberCardModal';

const Introduce = () => {
  const [modalHandler, setModalHandler] = useRecoilState(modalState);
  const [selectedId, setSelectedId] = useState(0);

  return (
    <>
      {modalHandler.memberCard && <MemberCardModal id={selectedId} />}
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
                  setSelectedId(id);
                  setModalHandler({
                    ...modalHandler,
                    [MODAL_KEY.MEMBER_CARD]: true,
                  });
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
export default Introduce;
