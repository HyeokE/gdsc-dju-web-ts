import styled, { css } from 'styled-components';

export const StyledButton = styled.button<{ disable?: boolean }>`
  color: white;
  width: 100%;
  padding: 12px 0px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) => props.theme.color.tossBlue};
  border-style: inherit;
  margin-bottom: 10px;
  background: ${(props) => props.theme.color.tossBlue};
  font-size: ${(props) => props.theme.fontSize.p};
  cursor: pointer;
  ${(props) =>
    props.disable &&
    css`
      cursor: not-allowed;
      background: ${(props) => props.theme.color.tossBlue200};
    `}
`;
