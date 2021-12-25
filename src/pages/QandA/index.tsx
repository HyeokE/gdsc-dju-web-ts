import React from 'react';
import { MainText, SubTitle, Title } from '../../components/common/Title/title';
import { Banner } from '../../img/Banner';
import YellowBanner from '../../img/YellowBanner.png';
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

export const Question = () => {
  const navigate = useNavigate();
  return (
    <>
      <BannerWrapper>
        <Banner src={YellowBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <TopMargin />
        <Title>자주 묻는 질문</Title>
        <TopMargin />
        {Faq.map((data, id) => (
          <QuestionWrapper
            key={id}
            whileHover={{ backgroundColor: '#efefef', color: '#3886f6' }}
            onClick={() => navigate('/faq/' + data.id)}
          >
            <QuestionMark />
            {data.question}
          </QuestionWrapper>
        ))}
        <TopMargin />
      </LayoutContainer>
    </>
  );
};
