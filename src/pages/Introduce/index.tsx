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
import {
  MainText,
  SubCategory,
  Title,
} from '../../components/common/Title/title';
import {
  listAnimate,
  memberCardAnimate,
} from '../../components/common/Variants/Variants';
import { Banner } from '../../img/Banner/Banner';
import YellowBanner from '../../img/Banner/YellowBanner.png';
import { introduceText, workWhenCome } from '../../api/pageData/introduceText';
import { memberList } from '../../api/pageData/MemberList';
import BulletList from '../../components/common/BulletList';
import MemberCardModal from '../../components/common/Modal/MemberCardModal';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { memberDataType } from '../../types/member';

const Introduce = () => {
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  const [selectedData, setSelectedData] = useState<memberDataType>({
    memberImg: '',
    nickname: '',
    name: '',
    introduce: '',
    role: '',
  });

  return (
    <>
      <BannerWrapper>
        <Banner src={YellowBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />

          <Title>About us</Title>
          <TopMargin />
          <SubCategory>Google Developer Student Club 소개</SubCategory>
          {introduceText.split('\n').map((line, id) => {
            return (
              <MainText key={id}>
                {line}
                <br />
              </MainText>
            );
          })}

          <TopMargin />
          <SubCategory>합류하시면 함께할 활동입니다</SubCategory>
          <MainText>
            <BulletList text={workWhenCome} />
          </MainText>
          <TopMargin />
          <Title>팀 소개</Title>
          <TopMargin />
          <AnimateSharedLayout>
            <CardList variants={listAnimate} initial={'start'} animate={'end'}>
              {memberList.map((memberInfo, id) => (
                <AnimatePresence key={id}>
                  <MemberCardWrapper
                    variants={memberCardAnimate}
                    onClick={() => {
                      setSelectedId(id);
                      setSelectedData(memberInfo);
                    }}
                  >
                    <MemberCard memberInfo={memberInfo} />
                  </MemberCardWrapper>
                </AnimatePresence>
              ))}
            </CardList>
            {selectedData && selectedId && (
              <MemberCardModal
                {...selectedData}
                setSelectedId={setSelectedId}
              />
            )}
          </AnimateSharedLayout>
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default Introduce;
