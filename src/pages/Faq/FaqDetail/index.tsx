import React from 'react';

import YellowBanner from '../../../img/Banner/YellowBanner.png';

import { useNavigate, useParams } from 'react-router-dom';
import { AnswerText, AnswerWrapper, BackToFaq, QuestionTitle } from './styled';
import {
  BannerWrapper,
  LayoutContainer,
  TopMargin,
} from '../../../styles/layouts';
import { Faq } from '../../../api/faq';
import { Banner } from '../../../img/Banner/Banner';

const FaqDetail = () => {
  const { id } = useParams();
  const faqData = Faq.find((data) => data.id === Number(id));
  const navigate = useNavigate();

  return (
    <>
      <BannerWrapper>
        <Banner src={YellowBanner} />
      </BannerWrapper>
      <TopMargin />
      <LayoutContainer>
        <BackToFaq onClick={() => navigate('/faq')}>← 질문 목록</BackToFaq>
        <QuestionTitle>{faqData?.question}</QuestionTitle>
        <TopMargin />
        <AnswerWrapper>
          {faqData?.answer.split('\n').map((text, id) => (
            <AnswerText key={id}>{text}</AnswerText>
          ))}
        </AnswerWrapper>
        <TopMargin />
      </LayoutContainer>
    </>
  );
};

export default FaqDetail;
