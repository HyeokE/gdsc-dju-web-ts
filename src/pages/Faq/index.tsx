import React from 'react';
import { MainText, SubTitle, Title } from '../../components/common/Title/title';
import { Banner } from '../../img/Banner/Banner';
import YellowBanner from '../../img/Banner/YellowBanner.png';
import {
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  List,
  Tage,
  TopMargin,
} from '../../styles/layouts';

import { QuestionMark, QuestionWrapper } from './styled';
import { Faq } from '../../api/faq';
import { useNavigate } from 'react-router-dom';
import { QuestionCategoryAnimate } from '../../components/common/Variants/Variants';

export const Question = () => {
  const navigate = useNavigate();
  return (
    <>
      <BannerWrapper>
        <Banner src={YellowBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>자주 묻는 질문</Title>
          <TopMargin />
          {Faq.map((data, id) => (
            <QuestionWrapper
              key={id}
              variants={QuestionCategoryAnimate}
              initial={'unHover'}
              whileHover={'hovered'}
              onClick={() => navigate('/faq/' + data.id)}
            >
              <QuestionMark />
              {data.question}
            </QuestionWrapper>
          ))}
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};
