import React, { memo, useLayoutEffect, useRef, useState } from 'react';
import { SubTitle, Title } from '../../../components/common/Title/title';
import { ContainerInner, LayoutContainer } from '../../../styles/layouts';
import {
  FormArticleWrapper,
  FormLabel,
  FormLi,
  FormMargin,
  FormMarginXS,
  FormSubmitButton,
  FormText,
  RecruitFormInner,
  RecruitFormWrapper,
} from './styled';
import TextInput from '../../../components/common/input/TextInput';
import { useNavigate, useParams } from 'react-router-dom';
import { positionSelect } from './FormFunctions';
import {
  getDownloadURL,
  ref,
  StorageReference,
  uploadBytesResumable,
  UploadTaskSnapshot,
} from 'firebase/storage';
import { storage } from '../../../firebase/firebase.config';
import { dbService } from '../../../firebase/firebase';
import { useRecoilState } from 'recoil';
import { loaderState } from '../../../store/loader';
import { FormikProvider, useFormik } from 'formik';
import { recruitFormSchema } from '../../../components/Validation/profileEdit';
import FileInput from '../../../components/common/input/FileInput';
import ApplyModal from '../../../components/common/Modal/ApplyModal';
import { MODAL_KEY, modalState } from '../../../store/modal';

const RecruitForm = () => {
  const { id } = useParams();
  const [position, setPosition] = useState('');
  const [loading, setLoading] = useRecoilState(loaderState);
  const [modal, setModal] = useRecoilState(modalState);
  const [uploadProgress, setUploadProgress] = useState(0);

  const input = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const recruitItem = {
    uploadDate: new Date(),
    name: '',
    phoneNumber: '',
    email: '',
    major: '',
    studentID: '',
    position: positionSelect[id as keyof typeof positionSelect],
    link0: '',
    link1: '',
    fileURL: '',
  };
  const recruitFormik = useFormik({
    initialValues: recruitItem,
    onSubmit: () => {
      return;
    },
    validationSchema: recruitFormSchema,
  });
  const uploadApplicantFile = (
    storageRef: StorageReference,
    file: File,
    object: Record<string, any>,
  ) => {
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.then(() => {
      getDownloadURL(storageRef).then(async (url) => {
        await dbService
          .collection('applicants')
          .doc()
          .set({ ...object, fileURL: url });
      });
    });
  };
  const checkFile = (fileList: FileList | null, size: number, type: string) => {
    if (fileList !== null) {
      const file = fileList[0];
      if (!file) return;
      if (file.size > size) {
        alert(
          `${type} ?????? ???????????? ${Math.floor(
            size / 1000000,
          )}MB ????????? ??????????????????.`,
        );
      }
      if (file.type !== type) {
        const typeName = type.replace('application/', '');
        alert(`${typeName} ????????? ????????? ???????????????.`);
        return;
      }
      return file;
    }
  };
  const calculateProgress = (progress, total) => {
    return Math.round((progress / total) * 100);
  };

  const uploadFiles = async (data: HTMLInputElement) => {
    try {
      const file = checkFile(data.files, 50000001, 'application/pdf');
      if (file instanceof File) {
        setLoading({ ...loading, load: true });
        setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: false });
        const storageRef = ref(storage, `${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        await uploadTask.on('state_changed', (snapshot: UploadTaskSnapshot) => {
          setUploadProgress(
            calculateProgress(snapshot.bytesTransferred, snapshot.totalBytes),
          );
        }),
          uploadApplicantFile(storageRef, file, recruitFormik.values);
        setLoading({ ...loading, load: false });
        navigate(
          `/recruit/apply-success?username=${recruitFormik.values.name}&position=${position}`,
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onSubmit = async () => {
    {
      input.current && (await uploadFiles(input.current));
    }
  };

  const requiredSchema = !!(
    recruitFormik.values.email &&
    recruitFormik.values.name &&
    recruitFormik.values.phoneNumber &&
    recruitFormik.values.major &&
    recruitFormik.values.studentID &&
    recruitFormik.values.position &&
    recruitFormik.values.link0.length > 0 &&
    input.current?.files
  );
  useLayoutEffect(() => {
    setPosition(positionSelect[id as keyof typeof positionSelect]);
  }, [id]);
  return (
    <>
      <ApplyModal {...recruitFormik.values} onClick={onSubmit} />
      <LayoutContainer>
        <ContainerInner>
          <FormMargin />
          <FormikProvider value={recruitFormik}>
            <RecruitFormWrapper>
              <RecruitFormInner>
                <Title>????????? ????????????</Title>
                <SubTitle>{position}</SubTitle>
                <FormMargin />
                <div>
                  <FormLabel essential={true}>??????(??????)</FormLabel>
                  <TextInput
                    placeholder={'?????????'}
                    name={'name'}
                    value={recruitFormik.values.name}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.name}
                    error={recruitFormik.errors.name}
                  />
                </div>

                <div>
                  <FormLabel essential={true}>????????????</FormLabel>
                  <TextInput
                    placeholder={'010-0000-0000'}
                    name={'phoneNumber'}
                    value={recruitFormik.values.phoneNumber}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.phoneNumber}
                    error={recruitFormik.errors.phoneNumber}
                  />
                </div>

                <div>
                  <FormLabel essential={true}>?????????(gmail)</FormLabel>
                  <TextInput
                    placeholder={'googledev@gmail.com'}
                    name={'email'}
                    value={recruitFormik.values.email}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.email}
                    error={recruitFormik.errors.email}
                  />
                </div>
                <div>
                  <FormLabel essential={true}>??????</FormLabel>
                  <TextInput
                    placeholder={'??????????????????'}
                    name={'major'}
                    value={recruitFormik.values.major}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.major}
                    error={recruitFormik.errors.major}
                  />
                </div>

                <div>
                  <FormLabel essential={true}>??????</FormLabel>
                  <TextInput
                    placeholder={'20221234'}
                    name={'studentID'}
                    value={recruitFormik.values.studentID}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.studentID}
                    error={recruitFormik.errors.studentID}
                  />
                </div>
                <div>
                  <FormLabel essential={true}>?????????</FormLabel>
                  <TextInput
                    disabled={true}
                    name={'position'}
                    placeholder={position}
                  />
                </div>

                <div>
                  <FormLabel essential={true}>?????????</FormLabel>
                  <FileInput
                    defaultPlaceholder={'????????? / ??????????????? PDF'}
                    ref={input}
                  />
                  <FormText>
                    * ????????? ?????? 50MB??? ????????? ?????? ??? ????????????.
                  </FormText>
                  <FormText>
                    * ????????? ????????? ?????? PDF ???????????? ??????????????????.
                  </FormText>
                  <FormText>
                    * ???????????? ?????? ???????????? ?????? ????????? ???????????? ??????????????????.
                  </FormText>
                  <FormArticleWrapper>
                    <FormLi>????????? ??? ?????? ??????????????? ???????????????.</FormLi>
                    <FormLi>
                      ???????????? ?????? ????????? ????????? ???????????? ???????????????.
                    </FormLi>
                    <FormLi>
                      ??? ?????? ????????? ????????? ?????? ????????? ?????? ????????????
                      ?????????????????? ???????????????.
                    </FormLi>
                    <FormLi>
                      ????????? ??????????????? ????????? ??????????????????? ?????????????????? ?????????
                      ???????????????.
                    </FormLi>
                    <FormLi>
                      ???????????? ??????????????? ????????? ?????? ?????? ?????????? ????????? ?????????
                      ????????? ????????? ???????????????.
                    </FormLi>
                  </FormArticleWrapper>
                </div>
                <div>
                  <FormLabel essential={true}>?????? 1</FormLabel>
                  <TextInput
                    placeholder={'https://'}
                    name={'link0'}
                    value={recruitFormik.values.link0}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.link0}
                    error={recruitFormik.errors.link0}
                  />
                  <FormMarginXS />
                  <FormLabel>?????? 2 (????????????)</FormLabel>
                  <TextInput
                    placeholder={'https://'}
                    name={'link1'}
                    value={recruitFormik.values.link1}
                    onChange={recruitFormik.handleChange}
                    touched={recruitFormik.touched.link1}
                    error={recruitFormik.errors.link1}
                  />
                  <FormText>
                    ????????? ??? ????????? ??? ?????? ???????????????, ??????, Github?????? ??????
                    ??????????????????.
                  </FormText>
                  <FormText>
                    *?????????????????? ????????????????????? ?????? ????????????/??????????????? ?????????
                    ????????? ??? ??????????????? ??????????????????.
                  </FormText>
                </div>
                <FormMargin />
                <FormSubmitButton
                  onClick={() =>
                    setModal({ ...modal, [MODAL_KEY.APPLY_CHECK]: true })
                  }
                  disable={!(recruitFormik.isValid && requiredSchema)}
                >
                  ????????????
                </FormSubmitButton>
                <FormMargin />
              </RecruitFormInner>
            </RecruitFormWrapper>
          </FormikProvider>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default memo(RecruitForm);
