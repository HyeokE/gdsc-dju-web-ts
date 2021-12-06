import React from 'react';
import { BannerWrapper, ContainerInner, TopMargin } from '../../Layout';
import { Banner } from '../../img/Banner';
import YellowBanner from '../../img/YellowBanner.png';
import { LayoutContainer } from '../../styles/layout';
import { Title } from '../../components/common/Title/title';
import { Faq } from '../../api/faq';
import { useNavigate, useParams } from 'react-router-dom';
import { AnswerText, AnswerWrapper, BackToFaq, QuestionTitle } from './styled';

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
