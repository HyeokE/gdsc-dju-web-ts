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
import {
  AdminContainerWrapper,
  ButtonElementWrapper,
  SidebarContainer,
  StyledAdminButton,
  StyledButtonWrapper,
} from './styled';
import AdminContent from '../../components/common/AdminContent';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from '../../api/hooks/modal';
import AdminSignInModal from '../../components/common/Modal/AdminSignIn';
import AdminSignUpModal from '../../components/common/Modal/AdminSignUp';
import { authService, dbService } from '../../firebase/firebase';
import AdminSetUserProfile from '../../components/common/Modal/AdminSetUserProfile';
import { userState } from '../../api/hooks/user';

const Admin = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [adminEmail, setAdminEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Main');
  const [adminUser, setAdminUser] = useRecoilState(userState);

  const checkAdminUser = () => {
    authService.onAuthStateChanged(async (user) => {
      if (user) {
        // console.log(user.emailVerified);
        try {
          await dbService
            .collection('adminUsers')
            .doc(user.uid)
            .get()
            .then((data) => {
              const userData = data.data();
              setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_IN]: false });
              setAdminUser({
                ...adminUser,
                uid: user.uid,
                nickName: userData?.nickName,
                name: userData?.name,
                phoneNumber: userData?.phoneNumber,
              });
            });
        } catch (error) {
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
          <SubTitle>Hello {adminUser.nickName}</SubTitle>
          <ButtonElementWrapper>
            <StyledButtonWrapper>
              <StyledAdminButton
                onClick={() => {
                  authService
                    .signOut()
                    .then((e) => {
                      console.log(e);
                      // Sign-out successful.
                    })
                    .catch((error) => {
                      console.log(error.message);
                    });
                }}
              >
                로그아웃
              </StyledAdminButton>
            </StyledButtonWrapper>
            <StyledButtonWrapper>
              <StyledAdminButton
                onClick={() => {
                  setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_UP]: true });
                  console.log(modal.adminSignUp);
                }}
              >
                회원가입
              </StyledAdminButton>
            </StyledButtonWrapper>
          </ButtonElementWrapper>
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
