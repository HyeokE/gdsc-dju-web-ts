import React, { useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';

const RecruitForm = () => {
  const { id } = useParams();
  const [position, setPosition] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [studentID, setStudentID] = useState('');
  const [link, setLink] = useState([]);
  const positionHandler = () => {
    switch (id) {
      case 'frontend':
        return setPosition('Frontend Developer');
      case 'backend':
        return setPosition('Backend Developer');
      case 'design':
        return setPosition('UX/UI Designer');
      case 'android':
        return setPosition('Android Developer');
      case 'beginner':
        return setPosition('Beginner Position');
      case 'ml':
        return setPosition('Machine Learning Engineer');
      default:
        return;
    }
  };
  useEffect(() => positionHandler(), []);
  return (
    <LayoutContainer>
      <ContainerInner>
        <NavigationBlock />
        <FormMargin />
        <RecruitFormWrapper>
          <RecruitFormInner>
            <Title>지원서 작성하기</Title>
            <SubTitle>{position}</SubTitle>
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
              <TextInput placeholder={'20221234'} />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>지원서</FormLabel>
              <TextInput
                file={true}
                image={'folder'}
                placeholder={'지원서 / 자기소개서(pdf)'}
              />
              <FormText>* 파일은 최대 20MB로 업로드 하실 수 있습니다.</FormText>
              <FormText>
                * 지원서는 자유 양식이며 기술 스택, 지원동기, 협업 경험, 팀 리드
                경험, 문제해결 경험을 포함해주세요.
              </FormText>
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>링크 1</FormLabel>
              <TextInput placeholder={'https://'} />
              <FormMarginXS />
              <FormLabel>링크 2 (선택사항)</FormLabel>
              <TextInput placeholder={'https://'} />
              <FormText>
                자신을 나타낼 수 있는 개인블로그, 노션, Github링크 등을
                입력해주세요.
              </FormText>
              <FormText>
                *포트폴리오를 업로드하셔야할 경우 클라우드/드라이브에 파일을
                업로드 후 공유링크를 입력해주세요.
              </FormText>
            </div>
            <FormMarginS />
            <FormSubmitButton disable={true}>제출하기</FormSubmitButton>
            <FormMargin />
          </RecruitFormInner>
        </RecruitFormWrapper>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default RecruitForm;