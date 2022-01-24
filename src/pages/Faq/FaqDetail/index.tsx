import React from 'react';

import YellowBanner from '../../../img/Banner/YellowBanner.png';

import { useNavigate, useParams } from 'react-router-dom';
import { AnswerText, AnswerWrapper, BackToFaq, QuestionTitle } from './styled';
import {
  BannerBlock,
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../../styles/layouts';
import { FaqData } from '../../../api/pageData/faq';
import { Banner } from '../../../img/Banner/Banner';

const FaqDetail = () => {
  const { id } = useParams();
  const faqData = FaqData.find((data) => data.id === Number(id));
  const navigate = useNavigate();

  return (
    <>
      <BannerBlock />
      <BannerWrapper>
        <Banner src={YellowBanner} />
      </BannerWrapper>
      <TopMargin />
      <LayoutContainer>
        <ContainerInner>
          <BackToFaq onClick={() => navigate('/faq')}>← 질문 목록</BackToFaq>
          <QuestionTitle>{faqData?.question}</QuestionTitle>
          <TopMargin />
          <AnswerWrapper>
            {faqData?.answer.split('\n').map((text, id) => (
              <AnswerText key={id}>{text}</AnswerText>
            ))}
          </AnswerWrapper>
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default FaqDetail;
