import React, { useEffect, useState } from 'react';
import { OnboardingContainer, OnboardingContainerWrapper } from '../styled';
import {
  onboardingAnimate,
  pageAnimate,
  pageTransitionAnimate,
} from '../../../components/common/Variants/Variants';
import backArrow from '../../../img/backArrow.png';
import Human1 from '../../../img/onBoardingImg/human_red.svg';
import Human2 from '../../../img/onBoardingImg/human-green.svg';
import Human3 from '../../../img/onBoardingImg/human-blue.svg';
import Human4 from '../../../img/onBoardingImg/human-yellow.svg';
import {
  OnboardingBackArrow,
  OnboardingBackText,
  OnboardingBackWrapper,
  OnboardingDescription,
  OnboardingImageWrapper,
  OnboardingInnerWrapper,
  OnboardingInput,
  OnboardingInputWrapper,
  OnboardingMiddleButton,
  OnboardingMiddleElementWrapper,
  OnboardingMiddleImage,
} from './styled';
import './OnboardingMiddle.css';
import {
  OnboardingTitle,
  OnboardingTitleWrapper,
} from '../OnBoardingHome/styled';
import { onBoardingData } from '../../../api/onBoarding';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { OnboardingMiddleTextWrapper } from '../OnboardingTicket/styled';
import MobileBlock from '../../../components/common/MobileBlock';
import { useRecoilState } from 'recoil';
import { onboardingUserState } from '../../../store/onboardingUser';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

const OnboardingMiddle = () => {
  const { id } = useParams();
  const pageData = onBoardingData.find((data) => data.id === id);
  const color = pageData?.color;
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(onboardingUserState);
  const [formikInput, setFormikInput] = useState<any>();

  const formik = useFormik({
    initialValues: {
      email: '',
      nickname: '',
      major: '',
      interest: '',
    },
    onSubmit: async () => {
      console.log(formik.values);
    },
    //validation setting
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          /^[A-Z0-9._%+-]+@[gmail]+\.[com]{2,4}$/i,
          '이메일 형식에 맞게 작성해주세요',
        )
        .required('필수입력란입니다.'),
      nickname: Yup.string()
        .min(2, '2글자이상 작성해주세요')
        .max(15, '2~15사이의 길이로 입력해주세요')
        .required('필수입력란입니다.'),
      major: Yup.string()
        .min(10, '10글자 이상 작성해주세요')
        .required('필수입력란입니다.'),
    }),
  });
  //set formik values
  const setFormik = () => {
    const name = pageData?.id;
    if (name === 'email') {
      setFormikInput(formik.values.email);
    } else if (name === 'nickname') {
      setFormikInput(formik.values.nickname);
    } else if (name === 'major') {
      setFormikInput(formik.values.major);
    } else if (name === 'interest') {
      setFormikInput(formik.values.interest);
    }
  };
  //connect data in recoil
  const onApply = () => {
    const id = pageData?.id;
    if (id === 'email') {
      setUserData({
        ...userData,
        email: formik.values.email,
      });
    } else if (id === 'nickname') {
      setUserData({
        ...userData,
        nickname: formik.values.nickname,
      });
    } else if (id === 'major') {
      setUserData({
        ...userData,
        major: formik.values.major,
      });
    } else if (id === 'interest') {
      setUserData({
        ...userData,
        interest: formik.values.interest,
      });
    }
  };
  return (
    <OnboardingContainerWrapper>
      {pageData && (
        <FormikProvider value={formik}>
          <Form>
            <OnboardingContainer
              initial="start"
              animate="end"
              exit="out"
              variants={pageTransitionAnimate}
              transition={pageAnimate}
            >
              <OnboardingMiddleElementWrapper>
                <OnboardingMiddleTextWrapper>
                  <OnboardingBackWrapper
                    variants={onboardingAnimate}
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    <OnboardingBackArrow src={backArrow} />
                    <OnboardingBackText>Back</OnboardingBackText>
                  </OnboardingBackWrapper>
                  <OnboardingTitleWrapper>
                    <OnboardingTitle variants={onboardingAnimate}>
                      Tell us
                    </OnboardingTitle>
                    <OnboardingInnerWrapper variants={onboardingAnimate}>
                      <OnboardingTitle>Your</OnboardingTitle>
                      <OnboardingTitle marginLeft={20} color={color}>
                        {pageData.title}
                      </OnboardingTitle>
                    </OnboardingInnerWrapper>
                  </OnboardingTitleWrapper>
                  <OnboardingDescription variants={onboardingAnimate}>
                    {pageData.subTitle}
                  </OnboardingDescription>
                  <OnboardingInputWrapper variants={onboardingAnimate}>
                    <OnboardingInput
                      placeholder={pageData.placeHolder}
                      name={pageData.id}
                      type={pageData.id}
                      value={formikInput}
                      onChange={formik.handleChange}
                      color={color}
                    />
                  </OnboardingInputWrapper>
                  <OnboardingMiddleButton
                    variants={onboardingAnimate}
                    color={color}
                    onClick={() => {
                      setFormik();
                      onApply();
                      navigate('/onboarding/' + pageData.next);
                    }}
                  >
                    다음으로
                  </OnboardingMiddleButton>
                </OnboardingMiddleTextWrapper>
                <OnboardingImageWrapper>
                  <OnboardingMiddleImage
                    variants={onboardingAnimate}
                    src={
                      pageData.id === 'email'
                        ? Human1
                        : pageData.id === 'nickname'
                        ? Human2
                        : pageData.id === 'major'
                        ? Human3
                        : pageData.id === 'interest'
                        ? Human4
                        : ''
                    }
                  />
                </OnboardingImageWrapper>
              </OnboardingMiddleElementWrapper>
            </OnboardingContainer>
          </Form>
        </FormikProvider>
      )}
    </OnboardingContainerWrapper>
  );
};

export default OnboardingMiddle;
