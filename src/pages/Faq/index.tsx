import React from 'react';
import { Title } from '../../components/common/Title/title';
import { Banner } from '../../img/Banner/Banner';
import YellowBanner from '../../img/Banner/YellowBanner.png';
import {
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../styles/layouts';

import { QuestionMark, QuestionWrapper } from './styled';
import { FaqData } from '../../api/pageData/faq';
import { useNavigate } from 'react-router-dom';
import { QuestionCategoryAnimate } from '../../components/common/Variants/Variants';

const Faq = () => {
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
          {FaqData.map((data, id) => (
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
export default Faq;
