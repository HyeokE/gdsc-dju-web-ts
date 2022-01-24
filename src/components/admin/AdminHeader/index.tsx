import React, { useEffect, useState } from 'react';
import './Admin.css';
import {
  AdminHeaderWrapper,
  AdminNavCategoryWrapper,
  AdminNavigationWrapper,
  ButtonElementWrapper,
  SidebarContainer,
  StyledAdminButton,
  StyledButtonWrapper,
  StyledSubTitle,
  StyledUserName,
} from './styled';
import { useRecoilState } from 'recoil';

import { alertState } from '../../../store/alert';
import { localUserState } from '../../../store/localUser';
import { MODAL_KEY, modalState } from '../../../store/modal';
import { authService, dbService } from '../../../firebase/firebase';
import AdminSignInModal from '../../../components/common/Modal/AdminSignIn';
import AdminSignUpModal from '../../../components/common/Modal/AdminSignUp';
import AdminSetUserProfile from '../../../components/common/Modal/AdminSetUserProfile';
import AdminTopMenu from '../../../components/admin/AdminTopMenu';
import {
  BannerBlock,
  BannerWrapper,
  ContainerInner,
  LayoutContainer,
  TopMargin,
} from '../../../styles/layouts';
import { Title } from '../../../components/common/Title/title';
import { useLocation } from 'react-router';
import GoogleSpinner from '../../common/GoogleSpinner';
import { Banner } from '../../../img/Banner/Banner';
import RedBanner from '../../../img/Banner/RedBanner.png';
import {
  NavDesign,
  NavInner,
  NavTask,
  NavTaskWrapper,
  NavWrapper,
  SchoolName,
  SchoolNameUni,
  StyledImg,
  StyledLogo,
  StyledLogoWrapper,
} from '../../common/navigation/DeskNavigation/styled';
import GDSCLogoClear from '../../../img/GDSCLogoClear.svg';
import AdminUserMenu from '../AdminUserMenu';

const AdminHome = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    location.pathname,
  );
  const [alert, setAlert] = useRecoilState(alertState);
  const [modal, setModal] = useRecoilState(modalState);
  const [adminUser, setAdminUser] = useRecoilState(localUserState);
  const [value, setValue] = useState(false);
  const [adminMenuHandler, setAdminMenuHandler] = useState(false);

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
      {!value && <GoogleSpinner />}
      <AdminSetUserProfile />
      <BannerBlock />
      <AdminNavigationWrapper>
        <NavWrapper>
          <NavInner>
            <NavTaskWrapper>
              <NavTask>
                <StyledLogoWrapper to={'/'}>
                  <StyledImg src={GDSCLogoClear} alt="GDSC-Chapter-Logo" />
                  <StyledLogo>GDSC</StyledLogo>
                  <SchoolName>Daejin </SchoolName>
                  <SchoolNameUni>Admin</SchoolNameUni>
                </StyledLogoWrapper>
              </NavTask>
            </NavTaskWrapper>
            <AdminNavCategoryWrapper>
              <SidebarContainer>
                <AdminTopMenu
                  tabs={tabs}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </SidebarContainer>
              <div>
                <AdminUserMenu
                  isOpen={adminMenuHandler}
                  setIsOpen={setAdminMenuHandler}
                />
              </div>
              {adminUser && (
                <StyledUserName
                  onClick={() => setAdminMenuHandler(!adminMenuHandler)}
                >
                  Hi {adminUser.nickName}
                </StyledUserName>
              )}
            </AdminNavCategoryWrapper>
          </NavInner>
        </NavWrapper>
      </AdminNavigationWrapper>
      <TopMargin />
    </>
  );
};

export default AdminHome;
