import React, { useEffect, useState } from 'react';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../../styles/layouts';
import {
  Handle,
  StyledPosition,
  Switch,
  ToggleButtonSection,
  ToggleButtonWrapper,
} from './styled';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../store/recruitHandler';
import API from '../../../api/index';
import { ToggleButton } from '@mui/material';
import { Title } from '../../../components/common/Title/title';

const AdminSetting = () => {
  const [recruit, setRecruit] = useRecoilState(recruitmentState);
  useEffect(() => {
    API.putRecruitmentInfo(recruit);
  }, [recruit]);
  // const keyTyped = name as keyof typeof recruit;
  const toggleSwitch = (key: string) => {
    switch (key) {
      case 'frontend':
        return setRecruit({ ...recruit, frontend: !recruit.frontend });
      case 'backend':
        return setRecruit({ ...recruit, backend: !recruit.backend });
      case 'android':
        return setRecruit({ ...recruit, android: !recruit.android });
      case 'beginner':
        return setRecruit({ ...recruit, beginner: !recruit.beginner });
      case 'design':
        return setRecruit({ ...recruit, design: !recruit.design });
      case 'ml':
        return setRecruit({ ...recruit, ml: !recruit.ml });
      case 'home':
        return setRecruit({ ...recruit, home: !recruit.home });
      default:
        return console.log('error');
    }
  };
  const isOn = (key: string) => {
    switch (key) {
      case 'frontend':
        return recruit.frontend;
      case 'backend':
        return recruit.backend;
      case 'android':
        return recruit.android;
      case 'beginner':
        return recruit.beginner;
      case 'design':
        return recruit.design;
      case 'ml':
        return recruit.ml;
      case 'home':
        return recruit.home;
    }
  };
  const convertPosition = (key: string) => {
    switch (key) {
      case 'frontend':
        return 'Frontend Developer';
      case 'backend':
        return 'Backend Developer';
      case 'android':
        return 'Android Developer';
      case 'beginner':
        return 'Beginner';
      case 'design':
        return 'Designer';
      case 'ml':
        return 'Machine Learning';
      case 'home':
        return 'Home Setting';
    }
  };
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <>
      <LayoutContainer>
        <ContainerInner>
          <Title>Recruitment Management</Title>
          <TopMargin />
          <ToggleButtonSection>
            {Object.keys(recruit).map((key, id) => (
              <ToggleButtonWrapper key={id}>
                <StyledPosition>{convertPosition(key)}</StyledPosition>
                <Switch data-isOn={isOn(key)} onClick={() => toggleSwitch(key)}>
                  <Handle layout transition={spring} />
                </Switch>
              </ToggleButtonWrapper>
            ))}
          </ToggleButtonSection>
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default AdminSetting;
