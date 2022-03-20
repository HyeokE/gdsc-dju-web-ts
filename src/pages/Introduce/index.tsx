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
import { memberList } from '../../api/pageData/MemberList';
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
          <MainText>
            함께 하는 팀원 {memberList.length}명을 소개합니다.
          </MainText>
          <TopMargin />
          <AnimateSharedLayout>
            <CardList variants={listAnimate} initial={'start'} animate={'end'}>
              {memberList.map((memberInfo, id) => (
                <AnimatePresence key={id + 1}>
                  <MemberCardWrapper
                    variants={memberCardAnimate}
                    onClick={() => {
                      setSelectedId(id + 1);
                      setSelectedData(memberInfo);
                    }}
                  >
                    <MemberCard {...memberInfo} id={id + 1} />
                  </MemberCardWrapper>
                </AnimatePresence>
              ))}
            </CardList>
            <AnimatePresence>
              {selectedId && selectedData && (
                <MemberCardModal
                  {...selectedData}
                  setSelectedId={setSelectedId}
                  id={selectedId}
                />
              )}
            </AnimatePresence>
          </AnimateSharedLayout>
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default Introduce;
