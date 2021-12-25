import React from 'react';
import {
  StyledLi,
  StyledLine,
  StyledTap,
  StyledTapWrapper,
  StyledUl,
} from './styled';
import './AdminTopMenu.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
type Props = {
  tabs: { label: string; route: string }[];
  setSelectedCategory: (selectedCategory: string) => void;
  selectedCategory: string;
};
const AdminTopMenu = ({
  tabs,
  setSelectedCategory,
  selectedCategory,
}: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <StyledUl>
          {tabs.map((item) => (
            <StyledLi
              key={item.label}
              className={item.label === selectedCategory ? 'selected' : ''}
              onClick={() => {
                setSelectedCategory(item.label);
                navigate('/admin/' + item.route);
              }}
            >
              {item.label}
              {item.label === selectedCategory ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </StyledLi>
          ))}
        </StyledUl>
      </nav>
      <StyledLine />
    </>
  );
};

export default AdminTopMenu;
