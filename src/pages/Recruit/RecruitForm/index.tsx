import React, { useEffect, useRef, useState } from 'react';
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
import { checkForm, positionHandler } from './FormFunctions';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage';
import { storage } from '../../../firebase/firebase.config';
import FileInput from '../../../components/common/input/FileInput';
import {
  InputImageWrapper,
  StyledFileInput,
  StyledInputWrapper,
} from '../../../components/common/input/TextInput/styled';
import Folder from '../../../img/Folder';
import { dbService } from '../../../firebase/firebase';

const RecruitForm = () => {
  const { id } = useParams();
  const [position, setPosition] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [studentID, setStudentID] = useState('');
  const [link0, setLink0] = useState('');
  const [link1, setLink1] = useState('');
  const [formSubmit, setFormSubmit] = useState(false);
  const [placeholder, setPlaceholder] = useState(
    '지원서/자기소개서/이력서 업로드 (PDF)',
  );
  const [uploadProgress, setUploadProgress] = useState(0);
  useEffect(() => {
    checkForm({
      position,
      name,
      phoneNumber,
      email,
      major,
      studentID,
      link0,
      placeholder,
      setFormSubmit,
    });
  }, [
    link0,
    major,
    studentID,
    email,
    phoneNumber,
    name,
    position,
    placeholder,
  ]);

  const onSubmit = async () => {
    await uploadFiles(input.current as HTMLInputElement);
  };

  const input = useRef<HTMLInputElement>(null);
  useEffect(() => positionHandler({ value: id, setValue: setPosition }), []);

  const uploadFiles = async (data: HTMLInputElement) => {
    if (data.files !== null) {
      const file = data.files[0];
      console.log(data.files);
      if (!file) return;
      if (file.size > 5000000) {
        alert('파일 사이즈는 50MB 이하로 선택해주세요.');
        return;
      }
      if (file.type !== 'application/pdf') {
        alert('PDF 파일만 업로드 가능합니다.');
        return;
      }
      const storageRef = ref(storage, `${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      await uploadTask.on('state_changed', (snapshot: any) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setUploadProgress(progress);
        console.log(progress);
      }),
        uploadTask.then(() => {
          getDownloadURL(storageRef).then(async (url: string) => {
            console.log(url);
            dbService.collection('applicants').doc().set({
              uploadDate: new Date().getDate(),
              name: name,
              phoneNumber: phoneNumber,
              email: email,
              major: major,
              studentID: studentID,
              position: position,
              link0: link0,
              link1: link1,
              fileURL: url,
            });
          });
        });
    }
  };

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
              <TextInput placeholder={'김구글'} onChange={setName} />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>전화번호</FormLabel>
              <TextInput
                placeholder={'010-0000-0000'}
                onChange={setPhoneNumber}
              />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>이메일(gmail)</FormLabel>
              <TextInput
                placeholder={'googledev@gmail.com'}
                onChange={setEmail}
              />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>학과</FormLabel>
              <TextInput placeholder={'OO학과'} onChange={setMajor} />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>학번</FormLabel>
              <TextInput placeholder={'20221234'} onChange={setStudentID} />
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>지원서</FormLabel>
              <StyledInputWrapper>
                <InputImageWrapper>
                  <Folder />
                </InputImageWrapper>
                <StyledFileInput
                  onClick={() => {
                    input.current?.click();
                  }}
                >
                  {placeholder}
                </StyledFileInput>
                <input
                  ref={input}
                  type={'file'}
                  style={{ display: 'none' }}
                  name={'fileName'}
                  onChange={(e) => {
                    e.target.files && setPlaceholder(e.target.files[0].name);
                  }}
                />
              </StyledInputWrapper>
              <FormText>* 파일은 최대 50MB로 업로드 하실 수 있습니다.</FormText>
              <FormText>
                * 원활한 검토를 위해 PDF 형식으로 제출해주세요.
              </FormText>
              <FormText>
                * 지원서는 자유 양식이며 기술 스택, 지원동기, 협업 경험, 팀 리드
                경험, 문제해결 경험을 포함해주세요.
              </FormText>
            </div>
            <FormMarginS />
            <div>
              <FormLabel essential={true}>링크 1</FormLabel>
              <TextInput placeholder={'https://'} onChange={setLink0} />
              <FormMarginXS />
              <FormLabel>링크 2 (선택사항)</FormLabel>
              <TextInput placeholder={'https://'} onChange={setLink1} />
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
            <FormSubmitButton disable={!formSubmit} onClick={() => onSubmit()}>
              제출하기
            </FormSubmitButton>
            <FormMargin />
          </RecruitFormInner>
        </RecruitFormWrapper>
      </ContainerInner>
    </LayoutContainer>
  );
};

export default RecruitForm;
