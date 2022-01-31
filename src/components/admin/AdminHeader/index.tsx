import React, { useState } from 'react';
import './Admin.css';
import {
  AdminNavCategoryWrapper,
  AdminNavigationWrapper,
  SidebarContainer,
  StyledUserName,
} from './styled';
import AdminSignInModal from '../../../components/common/Modal/AdminSignIn';
import AdminSignUpModal from '../../../components/common/Modal/AdminSignUp';
import AdminSetUserProfile from '../../../components/common/Modal/AdminSetUserProfile';
import AdminTopMenu from '../../../components/admin/AdminTopMenu';
import { NavigationBlock, TopMargin } from '../../../styles/layouts';
import { useLocation } from 'react-router';
import {
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
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { localUserState } from '../../../store/localUser';

const AdminHome = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [adminMenuHandler, setAdminMenuHandler] = useState(false);
  const [adminUser] = useRecoilState(localUserState);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    location.pathname,
  );

  const tabs = [
    { label: 'Home', route: '/admin' },
    { label: 'Members', route: '/admin/member' },
    { label: 'Setting', route: '/admin/setting' },
  ];

  return (
    <>
      <AdminSignInModal />
      <AdminSignUpModal />
      <AdminSetUserProfile />
      <AdminSetUserProfile />
      <NavigationBlock />
      <AdminNavigationWrapper>
        <NavWrapper>
          <NavInner>
            <NavTaskWrapper>
              <NavTask>
                <StyledLogoWrapper to={'/admin'}>
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
              {adminUser.nickName.length > 0 && (
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
