import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CategoryWrapper = styled(motion.div)`
  display: flex;
  padding: 24px 0px;
  margin-right: 30px;
  cursor: pointer;
  background: white;
  border-radius: 10px;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    margin-right: 10px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;
export const TeamCategoryWrapper = styled.div`
  display: flex;
  padding: 24px 0px;
  margin-right: 30px;
  justify-content: space-around;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const CategoryInner = styled.div`
  padding-left: 30px;
  font-size: 1.8rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 320px;
`;
export const SubCategory = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.grey600};
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 300px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 200px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 200px;
  }
`;
export const TeamCategory = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  width: 330px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.grey700};
`;
export const TeamSubCategory = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 10px;
  width: 200px;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.grey700};
`;
export const Category = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  width: 500px;
  font-size: 1.8rem;
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 500px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 300px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 200px;
  }
  @media (max-width: 320px) {
    width: 200px;
    padding: 0;
  }
`;
export const CategoryList = styled.div`
  display: flex;
  align-items: center;
  min-width: 410px;
  padding-left: 30px;
`;
export const MobileCategoryWrapper = styled.div`
  display: none;
  padding: 24px 0px;

  cursor: pointer;
  border-radius: 10px;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    background: ${({ theme }) => theme.colors.grey200};
  }
  @media (max-width: 500px) {
    display: flex;
  }
`;
export const MobileCategoryInner = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  min-width: 320px;
  @media (max-width: 320px) {
    padding-left: 10px;
    min-width: 150px;
  }
  @media (max-width: 500px) {
    display: flex;
    min-width: 150px;
  }
`;
