import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  padding: 24px 0px;
  margin-right: 30px;
  cursor: pointer;
  border-radius: 10px;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    background: #f2f4f6;
  }
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
  @media (max-width: 500px) {
    display: none;
  }
`;
export const CategoryInner = styled.div`
  padding: 0 30px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 320px;
`;
export const SubCategory = styled.div`
  display: flex;
  align-items: center;
  min-width: 180px;
  font-size: 13px;
  color: rgb(139, 149, 161);

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
  width: 340px;
  font-size: 13px;
  color: rgb(139, 149, 161);
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 300px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 200px;
  }
`;
export const TeamSubCategory = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 40px;
  min-width: 140px;
  font-size: 13px;
  color: rgb(139, 149, 161);
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 200px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 150px;
  }
`;
export const Category = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  width: 350px;
  padding-right: 30px;
  font-size: 18px;
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 300px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 300px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 300px;
  }
  @media (max-width: 320px) {
    width: 200px;
    font-size: 15px;
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
  width: 100%;
  display: none;
  padding: 24px 0px;
  margin-right: 30px;
  cursor: pointer;
  border-radius: 10px;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    background: #f2f4f6;
  }
  @media (max-width: 500px) {
    display: flex;
  }
`;
export const MobileCategoryInner = styled.div`
  padding: 0 30px;
  font-size: 18px;
  display: flex;
  flex-direction: column;

  min-width: 320px;
`;
