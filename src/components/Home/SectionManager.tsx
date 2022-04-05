import React from 'react';
import styled from 'styled-components';
import { HomeSectionContainer } from './styled';
import MemberCard from '../common/MemberCard';
import jason from '../../assets/managerProfile/jason.jpeg';

const ManagerTitle = styled.span`
  margin-bottom: 13px;
  font-size: ${({ theme }) => theme.fontSize.h1};
  font-style: normal;
  font-weight: bold;
  font-stretch: normal;
  line-height: 1.4em;
  color: ${({ theme }) => theme.colors.grey900}
  text-align: center;
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
  font-size: ${({ theme }) => theme.fontSize.h3};
}
`;
const ManagerSubTitle = styled.div`
  margin-bottom: 42px;
  font-size: ${({ theme }) => theme.fontSize.h5};
  font-style: normal;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.45em;
  color: ${({ theme }) => theme.colors.grey600};
  text-align: center;
  letter-spacing: normal;
  word-break: keep-all;
  -webkit-font-smoothing: subpixel-antialiased;
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    font-size: ${({ theme }) => theme.fontSize.body1};
  }
`;
const MemberCardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const MemberCardWrapper = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: ${({ theme }) => theme.windowSize.desk}px) {
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.mobile}px) {
    width: 100%;
  }
`;

const SectionManager = () => {
  return (
    <HomeSectionContainer>
      <ManagerTitle>Management</ManagerTitle>
      <ManagerSubTitle>GDSC Daejin의 운영진을 소개합니다</ManagerSubTitle>
      <MemberCardSection>
        <MemberCardWrapper>
          <MemberCard image={jason} id={1} />
        </MemberCardWrapper>
        <MemberCardWrapper>
          <MemberCard image={jason} id={2} />
        </MemberCardWrapper>
        <MemberCardWrapper>
          <MemberCard image={jason} id={3} />
        </MemberCardWrapper>
        <MemberCardWrapper>
          <MemberCard image={jason} id={4} />
        </MemberCardWrapper>
      </MemberCardSection>
    </HomeSectionContainer>
  );
};

export default SectionManager;
