import styled from 'styled-components';

export const CategoryWrapper = styled.div`
  display: flex;
  padding: 24px 0px;
  margin: 0px;
  margin-right: 30px;
  cursor: pointer;
  border-radius: 10px;
  ransition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0s;
  &:hover {
    background: #f2f4f6;
  }
`;
export const TeamCategoryWrapper = styled.div`
  display: flex;
  padding: 24px 0px;
  margin: 0px;
  margin-right: 30px;
`;
export const CategoryInner = styled.div`
  padding: 0 30px;
  font-size: 18px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const SubCategory = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 200px;
  min-width: 280px;

  font-size: 13px;
  color: rgb(139, 149, 161);
`;
export const TeamCategory = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: 40px;
  min-width: 360px;
  font-size: 13px;
  color: rgb(139, 149, 161);
`;
export const Category = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  width: 400px;
  min-width: 420px;
  padding-right: 30px;
  font-size: 18px;
`;
