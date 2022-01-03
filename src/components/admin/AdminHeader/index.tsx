import React, { useEffect, useState } from 'react';
import './Admin.css';
import {
  AdminContainerWrapper,
  AdminHeaderWrapper,
  ButtonElementWrapper,
  SidebarContainer,
  StyledAdminButton,
  StyledButtonWrapper,
  StyledSubTitle,
  StyledUserName,
} from './styled';
import { useRecoilState } from 'recoil';
import { Backdrop, CircularProgress } from '@mui/material';

import { alertState } from '../../../store/alert';
import { localUserState } from '../../../store/localUser';
import { modalState, MODAL_KEY } from '../../../store/modal';
import { authService, dbService } from '../../../firebase/firebase';
import AdminSignInModal from '../../../components/common/Modal/AdminSignIn';
import AdminSignUpModal from '../../../components/common/Modal/AdminSignUp';
import AdminSetUserProfile from '../../../components/common/Modal/AdminSetUserProfile';
import RedBanner from '../../../img/Banner/RedBanner.png';
import AdminTopMenu from '../../../components/admin/AdminTopMenu';
import {
  LayoutContainer,
  TopMargin,
  ContainerInner,
} from '../../../styles/layouts';
import { BannerWrapper } from '../../../styles/layouts';
import { Title } from '../../../components/common/Title/title';
import { useLocation } from 'react-router';
import { Banner } from '../../../img/Banner/Banner';

const AdminHome = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    location.pathname,
  );
  const [alert, setAlert] = useRecoilState(alertState);
  const [modal, setModal] = useRecoilState(modalState);
  const [adminUser, setAdminUser] = useRecoilState(localUserState);

  const [value, setValue] = useState(false);

  const tabs = [
    { label: 'Home', route: '/admin' },
    { label: 'Members', route: '/admin/member' },
    { label: 'Setting', route: '/admin/setting' },
  ];

  const checkAdminUser = () => {
    authService.onAuthStateChanged(async (user: any) => {
      if (user) {
        await setAdminUser({
          ...adminUser,
          uid: user.uid,
        });
        setValue(true);

        try {
          await dbService
            .collection('adminUsers')
            .doc(user.uid)
            .get()
            .then(async (data) => {
              const userData = data.data();

              if (userData === undefined) {
                setAlert({
                  ...alert,
                  alertHandle: true,
                  alertStatus: 'warning',
                  alertMessage: '추가정보를 입력하셔야합니다.',
                });
                setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_IN]: false });
                setModal({
                  ...modal,
                  [MODAL_KEY.ADMIN_SET_PROFILE]: true,
                });
              } else {
                setAlert({
                  ...alert,
                  alertHandle: true,
                  alertStatus: 'success',
                  alertMessage: '반가워요 ' + userData?.nickName,
                });
                setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_IN]: false });
                setAdminUser({
                  ...adminUser,
                  uid: user.uid,
                  nickName: userData?.nickName,
                  name: userData?.name,
                  phoneNumber: userData?.phoneNumber,
                });
              }
            });
        } catch (e: any) {
          console.log(e.message);
        }
      } else {
        setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_IN]: true });
        setValue(false);
      }
    });
  };
  useEffect(() => {
    checkAdminUser();
  }, []);

  return (
    <>
      <AdminSignInModal />
      <AdminSignUpModal />
      <AdminSetUserProfile />
      <Backdrop sx={{ color: '#fff', zIndex: 999 }} open={!value}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <AdminSetUserProfile />

      <AdminHeaderWrapper>
        <LayoutContainer>
          <ContainerInner>
            <TopMargin />
            <Title>Admin Page</Title>
            {adminUser ? (
              <StyledSubTitle>
                <StyledUserName>Hello {adminUser.nickName}</StyledUserName>
              </StyledSubTitle>
            ) : null}
            <ButtonElementWrapper>
              <StyledButtonWrapper>
                <StyledAdminButton
                  onClick={() => {
                    authService.signOut();
                  }}
                >
                  로그아웃
                </StyledAdminButton>
              </StyledButtonWrapper>
              <StyledButtonWrapper>
                <StyledAdminButton
                  onClick={() => {
                    setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_UP]: true });
                  }}
                >
                  회원가입
                </StyledAdminButton>
              </StyledButtonWrapper>
            </ButtonElementWrapper>
            <TopMargin />

            <SidebarContainer>
              <AdminTopMenu
                tabs={tabs}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </SidebarContainer>
          </ContainerInner>
        </LayoutContainer>
      </AdminHeaderWrapper>
      <TopMargin />
    </>
  );
};

export default AdminHome;
