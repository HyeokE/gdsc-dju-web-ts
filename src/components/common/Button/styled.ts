import styled from 'styled-components';

export const StyledButton = styled.button`
  background: ${(props) => props.theme.color.tossBlue};
  color: white;
  width: 100%;
  padding: 12px 0px;
  border-radius: 10px;
  border-width: 1px;
  border-color: ${(props) => props.theme.color.tossBlue};
  border-style: inherit;
  margin-bottom: 10px;
  font-size: 1.6rem;
  &:hover {
    background: ${(props) => props.theme.color.tossBlueActive};
    cursor: pointer;
  }
`;
