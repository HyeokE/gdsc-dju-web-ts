import React, { useEffect, useState } from 'react';
import { Title } from '../../components/common/Title/title';
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
  StyledSubTitle,
  StyledUserName,
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
import AdminTopMenu from '../../components/common/AdminTopMenu';

const Admin = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Home');
  const [modal, setModal] = useRecoilState(modalState);
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
      <AdminSignInModal />
      <AdminSignUpModal />
      <BannerWrapper>
        <BannerImage src={RedBanner} />
      </BannerWrapper>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>Admin Setting</Title>
          {adminUser.nickName.length > 0 ? (
            <StyledSubTitle>
              <StyledUserName>Hello {adminUser.nickName}</StyledUserName>
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
            </StyledSubTitle>
          ) : null}

          <TopMargin />
          <AdminContainerWrapper>
            <SidebarContainer>
              <AdminTopMenu
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
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
