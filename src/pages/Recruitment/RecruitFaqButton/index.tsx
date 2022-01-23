import React from 'react';
import { StyledButton } from '../../../components/common/Button/styled';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../store/recruitHandler';
import { useNavigate } from 'react-router-dom';

const RecruitFaqButton = (props: { name: string }) => {
  const { name } = props;
  const [recruit] = useRecoilState(recruitmentState);
  const keyTyped = name as keyof typeof recruit.member;
  console.log(keyTyped);
  const navigate = useNavigate();
  return (
    <>
      <StyledButton
        onClick={() => {
          navigate('/faq');
        }}
      >
        자주 하는 질문
      </StyledButton>
      {recruit.member[`${keyTyped}`] ? (
        <StyledButton
          onClick={() => {
            window.open('https://forms.gle/FwoDUZSCcHHow8iC7', '_blank');
          }}
        >
          지원하기
        </StyledButton>
      ) : (
        <StyledButton disabled>지원기간이 아닙니다.</StyledButton>
      )}
    </>
  );
};

export default RecruitFaqButton;
