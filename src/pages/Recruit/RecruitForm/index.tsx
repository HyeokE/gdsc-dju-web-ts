import React from 'react';
import { SubTitle, Title } from '../../../components/common/Title/title';
import {
  ContainerInner,
  LayoutContainer,
  NavigationBlock,
} from '../../../styles/layouts';
import {
  FormLabel,
  FormMargin,
  FormMarginS,
  FormMarginXS,
  FormSubmitButton,
  FormText,
  RecruitFormInner,
  RecruitFormWrapper,
} from './styled';
import TextInput from '../../../components/common/input/TextInput';

const RecruitForm = () => {
  const id = 'Frontend Developer';
  return (
    <LayoutContainer>
      <ContainerInner>
        <NavigationBlock />
        <FormMargin />
        <RecruitFormWrapper>
          <RecruitFormInner>
            <Title>지원서 작성하기</Title>
            <SubTitle>{id}</SubTitle>
            <FormMargin />
            <div>
              <FormLabel essential={true}>이름(실명)</FormLabel>
              <TextInput placeholder={'김구글'} />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>전화번호</FormLabel>
              <TextInput placeholder={'010-0000-0000'} />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>이메일(gmail)</FormLabel>
              <TextInput placeholder={'googledev@gmail.com'} />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>학과</FormLabel>
              <TextInput placeholder={'OO학과'} />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>학번</FormLabel>
              <TextInput placeholder={'20220000'} />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>지원서</FormLabel>
              <TextInput
                file={true}
                image={'folder'}
                placeholder={'지원서 및 포트폴리오'}
              />
              <FormText>* 파일은 최대 20MB로 업로드 하실 수 있습니다.</FormText>
              <FormText>
                * 지원서 및 포트폴리오는 자유 양식이며 기술 스택, 지원동기, 협업
                경험, 팀 리드 경험, 문제해결 경험을 포함해주세요.
              </FormText>
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>링크 1</FormLabel>
              <TextInput placeholder={'https://'} />
              <FormMarginXS />
              <FormLabel>링크 2</FormLabel>
              <TextInput placeholder={'https://'} />
              <FormText>
                자신을 나타낼 수 있는 개인블로그나 노션, Github링크를
                입력해주세요.
              </FormText>
            </div>
            <FormMarginS />
            <FormSubmitButton>제출하기</FormSubmitButton>
            <FormMargin />
          </RecruitFormInner>
        </RecruitFormWrapper>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default RecruitForm;
