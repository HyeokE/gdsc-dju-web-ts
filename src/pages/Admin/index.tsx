import React, { useEffect, useState } from 'react';
import {
  VerticalItem,
  VerticalNavigation,
  VerticalSection,
} from 'react-rainbow-components';
import { SubTitle, Title } from '../../components/common/Title/title';
import { ContainerInner, TopMargin } from '../../Layout';
import { LayoutContainer } from '../../styles/layout';
import './Admin.css';
import { AdminContainerWrapper, SidebarContainer } from './styled';
import AdminContent from '../../components/common/AdminContent';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../api/hooks/modal';
import { StyledButton } from '../../components/common/Button/styled';
import AdminSignInModal from '../../components/common/Modal/AdminSignIn';
import AdminSignUpModal from '../../components/common/Modal/AdminSignUp';
import { authService } from '../../firebase/firebase';
import AdminSetUserProfile from '../../components/common/Modal/AdminSetUserProfile';

const Admin = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [adminEmail, setAdminEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Main');

  const checkAdminUser = () => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        // console.log(user.emailVerified);
        if (user.emailVerified === true) {
          setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_IN]: false });
        } else {
          setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_IN]: false });
          setModal({ ...modal, [MODAL_KEY.ADMIN_SET_PROFILE]: true });
        }
      } else {
        setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_IN]: true });
      }
    });
  };
  useEffect(() => {
    checkAdminUser();
  }, [adminEmail]);
  return (
    <>
      <AdminSetUserProfile />
      <AdminSignInModal />
      <AdminSignUpModal />
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>Admin Page</Title>
          <SubTitle>안녕하세요 관리자님</SubTitle>
          <div
            onClick={() => {
              authService
                .signOut()
                .then((e) => {
                  console.log(e);
                  // Sign-out successful.
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
          >
            로그아웃
          </div>
          <StyledButton
            onClick={() => {
              setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_IN]: true });
              console.log(modal.adminSignUp);
            }}
          >
            로그인
          </StyledButton>
          <StyledButton
            onClick={() => {
              setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_UP]: true });
              console.log(modal.adminSignUp);
            }}
          >
            회원가입
          </StyledButton>
          <TopMargin />
          <AdminContainerWrapper>
            <SidebarContainer>
              <VerticalNavigation
                selectedItem={selectedCategory}
                onSelect={(e, selectedItem) =>
                  setSelectedCategory(selectedItem)
                }
              >
                <VerticalSection label="Member">
                  <VerticalItem name="Main" label="Main" />
                  <VerticalItem name="Member-List" label="Member List" />
                  <VerticalItem name="Warn-Count" label="Warn Count" />
                </VerticalSection>
                <VerticalSection label="Recruitment">
                  <VerticalItem name="Core-Member" label="Core Member" />
                  <VerticalItem name="Member" label="Member" />
                </VerticalSection>
              </VerticalNavigation>
            </SidebarContainer>
            <AdminContent selectedCategory={selectedCategory} />
          </AdminContainerWrapper>
          <TopMargin />
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Admin;
