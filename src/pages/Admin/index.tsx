import React, { useEffect, useState } from 'react';
import {
  Modal,
  VerticalItem,
  VerticalNavigation,
  VerticalSection,
} from 'react-rainbow-components';
import { StyledButton } from '../../components/common/Button/styled';
import { SubTitle, Title } from '../../components/common/Title/title';
import { StyledInput } from '../../components/Input/Input';
import { ContainerInner, TopMargin } from '../../Layout';
import { LayoutContainer } from '../../styles/layout';
import './Admin.css';
import {
  AdminContainerWrapper,
  ButtonWrapper,
  SidebarContainer,
} from './styled';
import AdminContent from '../../components/common/AdminContent';

const Admin = () => {
  const [adminModal, setAdminModal] = useState(false);
  const [getAdminEmail, setGetAdminEmail] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Main');
  const checkAdmin = () => {
    if (adminEmail === 'Jason0909@gmail.com') {
      setAdminModal(false);
    } else {
      setAdminModal(true);
    }
  };
  useEffect(() => {
    // checkAdmin();
  }, [adminEmail]);
  return (
    <>
      <Modal
        size={'small'}
        isOpen={adminModal}
        style={{ display: 'flex', padding: '10px', width: 400 }}
      >
        <SubTitle>Admin Login</SubTitle>

        <StyledInput
          onChange={(e) => {
            setGetAdminEmail(e.target.value);
          }}
        />
        <ButtonWrapper>
          <StyledButton
            onClick={() => {
              setAdminEmail(getAdminEmail);
            }}
          >
            관리자 로그인
          </StyledButton>
        </ButtonWrapper>
      </Modal>
      <LayoutContainer>
        <ContainerInner>
          <TopMargin />
          <Title>Admin Page</Title>
          <SubTitle>안녕하세요 관리자님</SubTitle>
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
                  <VerticalItem name="CoreMember" label="Core Member" />
                  <VerticalItem name="Member" label="Member" />
                </VerticalSection>
              </VerticalNavigation>
            </SidebarContainer>
            <AdminContent selectedCategory={selectedCategory} />
          </AdminContainerWrapper>
          <TopMargin />
        </ContainerInner>
      </LayoutContainer>
    </>
  );
};

export default Admin;
