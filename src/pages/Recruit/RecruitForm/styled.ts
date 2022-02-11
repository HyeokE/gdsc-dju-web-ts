import styled, { css } from 'styled-components';

export const FormTopMargin = styled.div`
  height: 90px;
`;
export const FormMargin = styled.div`
  height: 50px;
`;
export const FormMarginS = styled.div`
  height: 30px;
`;
export const FormMarginXS = styled.div`
  height: 15px;
`;
export const RecruitFormWrapper = styled.div`
  max-width: 512px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
export const RecruitFormInner = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const FormLabel = styled.label<{ essential?: boolean }>`
  padding: 5px 0;
  display: inline-block;
  font-size: ${(props) => props.theme.fontSize.p};
  font-weight: 400;
  line-height: 1.5;
  color: ${(props) => props.theme.color.grey700};
   {
    ${(props) =>
      props.essential &&
      css`
        &::after {
          display: inline-block;
          margin: 0 0 2px 6px;
          content: '';
          width: 6px;
          height: 6px;
          background-color: ${(props) => props.theme.color.tossRed};
          border-radius: 3px;
        }
      `}
  }
`;
export const FormText = styled.p`
  margin-top: 4px;
  font-size: 15px;
  line-height: 24px;
  font-weight: 300;
  color: ${(props) => props.theme.color.grey600};
`;
export const FormSubmitButton = styled.button<{ disable?: boolean }>`
  padding: 18px 20px;
  min-width: 100px;
  border: none;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 25%;
  font-size: ${(props) => props.theme.fontSize.p};
  border-radius: 10px;
  cursor: pointer;
  background: ${(props) => props.theme.color.tossBlueActive};

  ${(prop) =>
    prop.disable &&
    css`
      background: ${(props) => props.theme.color.tossBlue200};
      cursor: not-allowed;
    `}
`;
