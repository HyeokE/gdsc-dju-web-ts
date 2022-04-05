import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import { HomeSectionContainer } from './styled';

const MissionWrapper = styled(motion.div)`
  position: relative;
  width: 100vw;
  box-sizing: border-box;
  padding: 70px 60px;
  margin: 0 auto;
  text-align: center;
  background: ${({ theme }) => theme.colors.grey600};
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
`;
const MissionTitle = styled.span`
  display: block;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 43.5px;
  color: ${({ theme }) => theme.colors.grey400};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
`;

const MissionContent = styled.div`
  font-size: ${({ theme }) => theme.fontSize.h4};
  margin-bottom: 10px;
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 43.5px;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
`;

const missionAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
const SectionGoal = () => {
  return (
    <MissionWrapper
      variants={missionAnimation}
      initial={'hidden'}
      whileInView={'visible'}
    >
      <MissionTitle>Our Mission</MissionTitle>

      <MissionContent>
        주변 환경이나 여러 학생 개발자들에게 좋은 영향을 줄 수 있는 커뮤니티가
        되는 것
      </MissionContent>
      <MissionContent>
        Impact students and empower them to impact their communities through
        technology.
      </MissionContent>
    </MissionWrapper>
  );
};

export default SectionGoal;
