import React, { useEffect, useLayoutEffect } from 'react';
import {
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../../styles/layouts';
import {
  AdminSidebar,
  Handle,
  RecruitCard,
  RecruitCardWrapper,
  StyledPosition,
  Switch,
  ToggleButtonInner,
  ToggleButtonSection,
  ToggleButtonWrapper,
} from './styled';
import { useRecoilState } from 'recoil';
import { recruitmentState } from '../../../store/recruitHandler';
import API from '../../../api/index';
import { Title } from '../../../components/common/Title/title';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import { dbService } from '../../../firebase/firebase';

const AdminSetting = () => {
  const [recruit, setRecruit] = useRecoilState(recruitmentState);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    API.putRecruitmentInfo(recruit);
  }, [recruit]);
  useEffect(() => {
    !searchParams.get('type') &&
      setSearchParams({
        type: 'frontend',
      });
  }, [location.pathname]);
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

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  const position = {
    frontend: 'Frontend Developer',
    backend: 'Backend Developer',
    android: 'Android Developer',
    beginner: 'Beginner',
    design: 'Designer',
    ml: 'Machine Learning',
    home: 'Home',
  };

  return (
    <>
      <AdminSidebar>
        {Object.keys(recruit).map((key, id) => (
          <RecruitCardWrapper key={id}>
            <RecruitCard>{position[key as keyof typeof position]}</RecruitCard>
          </RecruitCardWrapper>
        ))}
      </AdminSidebar>

      {/*<ToggleButtonSection>*/}
      {/*  {Object.keys(recruit).map((key, id) => (*/}
      {/*    <ToggleButtonWrapper key={id}>*/}
      {/*      <ToggleButtonInner>*/}
      {/*        <StyledPosition>{convertPosition(key)}</StyledPosition>*/}
      {/*        <Switch*/}
      {/*          data-isOn={isOn(key)}*/}
      {/*          onClick={() => toggleSwitch(key)}*/}
      {/*        >*/}
      {/*          <Handle layout transition={spring} />*/}
      {/*        </Switch>*/}
      {/*      </ToggleButtonInner>*/}
      {/*    </ToggleButtonWrapper>*/}
      {/*  ))}*/}
      {/*</ToggleButtonSection>*/}
    </>
  );
};

export default AdminSetting;
