import React, { useEffect, useState } from 'react';
import { Tab, Tabset } from 'react-rainbow-components';
import { SubTitle, Title } from '../../components/common/Title/title';
import {
  BannerImage,
  BannerWrapper,
  ContainerInner,
  TopMargin,
} from '../../Layout';
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
import RedBanner from '../../img/RedBanner.png';

const Admin = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [selectedCategory, setSelectedCategory] = useState('Home');
  const [adminUser, setAdminUser] = useRecoilState(userState);

  const checkAdminUser = () => {
    authService.onAuthStateChanged(async (user) => {
      if (user) {
        await setAdminUser({
          ...adminUser,
          uid: user.uid,
        });
        // console.log(user.emailVerified);
        try {
          await dbService
            .collection('adminUsers')
            .doc(user.uid)
            .get()
            .then((data) => {
              const userData = data.data();
              if (userData == undefined) {
                setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_IN]: false });
                setModal({ ...modal, [MODAL_KEY.ADMIN_SET_PROFILE]: true });
              } else {
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
      }
    });
  };
  useEffect(() => {
    checkAdminUser();
  }, []);
  return (
    <>
      <AdminSetUserProfile />
      <AdminSignInModal />
      <AdminSignUpModal />
      <BannerWrapper>
        <BannerImage src={RedBanner} />
      </BannerWrapper>
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
            {/*<StyledButtonWrapper>*/}
            {/*  <StyledAdminButton*/}
            {/*    onClick={() => {*/}
            {/*      setModal({ ...modal, [MODAL_KEY.ADMIN_SIGN_UP]: true });*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    회원가입*/}
            {/*  </StyledAdminButton>*/}
            {/*</StyledButtonWrapper>*/}
          </ButtonElementWrapper>
          <TopMargin />
          <AdminContainerWrapper>
            <SidebarContainer>
              <Tabset
                variant="line"
                activeTabName={selectedCategory}
                onSelect={(e, selectedItem) =>
                  setSelectedCategory(selectedItem)
                }
              >
                <Tab name="Home" label="Home" />
                <Tab name="Members" label="Members" />
                <Tab name="Setting" label="Setting" />
              </Tabset>
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
