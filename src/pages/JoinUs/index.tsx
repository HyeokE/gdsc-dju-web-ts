import React, { useState } from 'react';
import { ContainerInner, LayoutContainer, TopMargin } from '../../Layout';
import { MainText, Title } from '../../components/common/Title/title';
import { BannerImage, BannerWrapper } from '../../Layout/index';

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
import { TeamInfomation } from '../../hooks/teamInfomation';
import { useHistory } from 'react-router';
import BlueBanner from '../../img/BlueBanner.png';

export const JoinUs = () => {
  const history = useHistory();
  const [post, setPost] = useState('kim');
  return (
    <>
      <BannerWrapper>
        <BannerImage src={BlueBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>함께 성장할 동료를 모집합니다</Title>
          <TopMargin />
          <MainText>열정적인 동료를 얻기 위해 이 자리에 모였습니다.</MainText>
          <MainText>
            우리는 함께 고민을 나누고 도전하며 목표를 향해 달리고 있습니다.
          </MainText>
          <TopMargin />
          <TeamCategoryWrapper>
            <TeamCategory>Team</TeamCategory>
            <TeamSubCategory>Skill</TeamSubCategory>
            <TeamSubCategory>Stack</TeamSubCategory>
          </TeamCategoryWrapper>
          {TeamInfomation.map((data, key) => (
            <CategoryWrapper
              key={key}
              onClick={() => {
                history.push('/joinus/' + data.id);
              }}
            >
              <CategoryInner>
                <Category>{data.name}</Category>
                <SubCategory>{data.skill}</SubCategory>
                <SubCategory>{data.stack}</SubCategory>
              </CategoryInner>
            </CategoryWrapper>
          ))}
          {TeamInfomation.map((data, key) => (
            <MobileCategoryWrapper
              key={key}
              onClick={() => {
                history.push('/joinus/' + data.id);
              }}
            >
              <MobileCategoryInner>
                <Category>{data.name}</Category>
                <SubCategory>{data.skill}</SubCategory>
              </MobileCategoryInner>
            </MobileCategoryWrapper>
          ))}
        </ContainerInner>

        <TopMargin />
      </LayoutContainer>
    </>
  );
};
