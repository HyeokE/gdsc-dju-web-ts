import React from 'react';
import styled from 'styled-components';
import { HomeSectionContainer } from './styled';
import { motion } from 'framer-motion';

const SectionTitle = styled.span`
  display: block;
  width: 100%;
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSize.h3};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 52px;
  color: ${({ theme }) => theme.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  margin-top: 5.1rem;
  word-break: keep-all;
`;
const ContentTitle = styled.span`
  margin-bottom: 0.9rem;
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 2.629rem;
  color: ${({ theme }) => theme.colors.grey600};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
`;
const ContentText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h2};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 8.013rem;
  color: ${({ theme }) => theme.colors.grey900};
  letter-spacing: normal;
  word-break: keep-all;
`;
const SectionWrapper = styled(motion.div)`
  max-width: 960px;
  padding: 0 5rem;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;
const SectionAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const SectionIntroduce = () => {
  return (
    <HomeSectionContainer>
      <SectionWrapper
        variants={SectionAnimation}
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ once: true }}
      >
        <SectionTitle>
          도전을 즐기는 사람들이 모여
          <br /> 엄청난 문구 추천받습니다.
        </SectionTitle>
        <ContentWrapper>
          <ContentTitle>누적 지원자 수</ContentTitle>
          <ContentText>90명 +</ContentText>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>전체 인원</ContentTitle>
          <ContentText>30명 +</ContentText>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>진행한 스터디/프로젝트</ContentTitle>
          <ContentText>10회 +</ContentText>
        </ContentWrapper>
        <ContentWrapper>
          <ContentTitle>진행한 이벤트</ContentTitle>
          <ContentText>100회 +</ContentText>
        </ContentWrapper>
      </SectionWrapper>
    </HomeSectionContainer>
  );
};

export default SectionIntroduce;

// import { MainText, SubCategory } from '../common/Title/title';
// import { introduceText, workWhenCome } from '../../api/pageData/introduceText';
// import BulletList from '../common/BulletList';
// import CircleSvgMotion from '../common/CircleSvgMotion';
{
  /*<SubCategory>Google Developer Student Club 소개</SubCategory>*/
}
{
  /*{introduceText.split('\n').map((line, id) => {*/
}
{
  /*  return (*/
}
{
  /*    <MainText key={id}>*/
}
{
  /*      {line}*/
}
{
  /*      <br />*/
}
{
  /*    </MainText>*/
}
{
  /*  );*/
}
{
  /*})}*/
}

{
  /*<TopMargin />*/
}
{
  /*<SubCategory>합류하시면 함께할 활동입니다</SubCategory>*/
}
{
  /*<MainText>*/
}
{
  /*  <BulletList text={workWhenCome} />*/
}
{
  /*</MainText>*/
}
