import React from 'react';
import {
  BannerBlock,
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';
import { MainText, Title } from '../../components/common/Title/title';

import {
  Category,
  CategoryInner,
  CategoryWrapper,
  MobileCategoryInner,
  MobileCategoryWrapper,
  SubCategory,
  TeamCategory,
  TeamCategoryWrapper,
  TeamSubCategory,
} from './styled';
import { RecruitTeam } from '../../api/pageData/recruitTeam';
import { useNavigate } from 'react-router';
import { Banner } from '../../img/Banner/Banner';

import BlueBanner from '../../img/Banner/BlueBanner.png';
import { categoryAnimate } from '../../components/common/Variants/Variants';

const JoinUs = () => {
  const navigate = useNavigate();

  return (
    <>
      <BannerBlock />
      <BannerWrapper>
        <Banner src={BlueBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>함께 성장할 동료를 모집합니다</Title>
          <TopMargin />
          <MainText>
            열정적인 동료를 얻기 위해 이 자리에 모였습니다.
            <br />
            우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
          </MainText>
          <TopMargin />
          <TeamCategoryWrapper>
            <TeamCategory>Team</TeamCategory>
            <TeamSubCategory>Skill</TeamSubCategory>
            <TeamSubCategory>Stack</TeamSubCategory>
          </TeamCategoryWrapper>
          {/*Desk 팀 리스트*/}
          {RecruitTeam.map((data, key) => (
            <CategoryWrapper
              key={key}
              initial={'unHover'}
              whileHover={'hovered'}
              variants={categoryAnimate}
              onClick={() => {
                navigate('/joinus/' + data.id);
              }}
            >
              <CategoryInner>
                <Category>{data.name}</Category>
                <SubCategory>{data.skill}</SubCategory>
                <SubCategory>{data.stack}</SubCategory>
              </CategoryInner>
            </CategoryWrapper>
          ))}
          {/*모바일 환경 팀 리스트*/}
          {RecruitTeam.map((data, key) => (
            <MobileCategoryWrapper
              key={key}
              onClick={() => {
                navigate('/joinus/' + data.id);
              }}
            >
              <MobileCategoryInner>
                <Category>{data.name}</Category>
                <SubCategory>{data.skill}</SubCategory>
              </MobileCategoryInner>
            </MobileCategoryWrapper>
          ))}
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
export default JoinUs;
