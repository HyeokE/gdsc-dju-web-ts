import React from 'react';
import styled from 'styled-components';
import { HomeSectionContainer } from './styled';

const MissionWrapper = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  width: 788px;
  height: 406px;
  padding: 60px 92px;
  margin: 0 auto;
  text-align: center;
  background: rgba(26, 30, 36, 0.65);
  border-radius: 16px;
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
  color: ${({ theme }) => theme.colors.blue400};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
`;
const MissionContent = styled.span`
  font-size: ${({ theme }) => theme.fontSize.h4};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 43.5px;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
`;

const SectionGoal = () => {
  return (
    <HomeSectionContainer>
      <MissionWrapper>
        <MissionContent>
          Impact students and empower them to impact their communities through
          technology.
        </MissionContent>
      </MissionWrapper>
    </HomeSectionContainer>
  );
};

export default SectionGoal;
