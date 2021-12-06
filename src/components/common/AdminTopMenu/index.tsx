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
type Props = {
  tabs: { label: string }[];
  setSelectedCategory: (selectedCategory: string) => void;
  selectedCategory: string;
};
const AdminTopMenu = ({
  tabs,
  setSelectedCategory,
  selectedCategory,
}: Props) => {
  return (
    <>
      <nav>
        <StyledUl>
          {tabs.map((item) => (
            <StyledLi
              key={item.label}
              className={item.label === selectedCategory ? 'selected' : ''}
              onClick={() => setSelectedCategory(item.label)}
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
