import React from 'react';
import { StyledTap, StyledTapWrapper } from './styled';
import './AdminTopMenu.css';
type Props = {
  setSelectedCategory: (selectedCategory: string) => void;
  selectedCategory: string;
};
const AdminTopMenu = ({ setSelectedCategory, selectedCategory }: Props) => {
  return (
    <>
      <StyledTapWrapper>
        <StyledTap
          className={selectedCategory === 'Home' ? 'Active' : 'NonActive'}
          onClick={() => {
            setSelectedCategory('Home');
          }}
        >
          Home
        </StyledTap>
        <StyledTap
          className={selectedCategory === 'Members' ? 'Active' : 'NonActive'}
          onClick={() => {
            setSelectedCategory('Members');
          }}
        >
          Members
        </StyledTap>
        <StyledTap
          className={selectedCategory === 'Setting' ? 'Active' : 'NonActive'}
          onClick={() => {
            setSelectedCategory('Setting');
          }}
        >
          Setting
        </StyledTap>
      </StyledTapWrapper>
      <hr />
    </>
  );
};

export default AdminTopMenu;
