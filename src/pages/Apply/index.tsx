import React from 'react';
import { SubTitle, Title } from '../../components/common/Title/title';
import { StyledInput } from '../../components/Input/Input';

import { ContainerInner, LayoutContainer, TopMargin } from '../../Layout';

const Apply = () => {
  return (
    <LayoutContainer>
      <ContainerInner>
        <TopMargin />
        <Title>지원서 작성하기</Title>
        <TopMargin />
        <SubTitle>이름</SubTitle>
        <StyledInput />
        <TopMargin />
        <SubTitle>전화번호</SubTitle>
        <StyledInput />
        <TopMargin />
        <SubTitle>이메일</SubTitle>
        <StyledInput />
        <TopMargin />
        <SubTitle>링크</SubTitle>
        <StyledInput />
      </ContainerInner>
    </LayoutContainer>
  );
};

export default Apply;
