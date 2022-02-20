import React, { useEffect, useRef, useState } from 'react';
import Folder from '../../../../img/Folder';
import {
  errorMessage,
  validateData,
} from '../../../../pages/Recruit/RecruitForm/FormFunctions';
import {
  ErrorBox,
  InputImageWrapper,
  StyledFileInput,
  StyledInput,
  StyledInputWrapper,
} from './styled';
export interface Iprops {
  name?: string;
  setError?: (error: boolean) => void;
  placeholder?: string;
  image?: string;
  file?: boolean;
  onChange: (e: any) => void;
  type?: string;
  value?: string;
  checkError?: (props: boolean) => void;
}
const TextInput = (props: Iprops) => {
  const { name, placeholder, onChange, type, value, checkError } = props;
  const [error, setError] = useState({ name: '', error: false });
  useEffect(() => {
    {
      name &&
        value &&
        setError({
          name: name,
          error: !validateData({ name: name, value: value }),
        });
    }
    {
      checkError && checkError(error.error);
    }
  }, [name, value]);

  return (
    <>
      <StyledInputWrapper error={error.error}>
        <StyledInput
          className={'formInput'}
          name={name}
          type={type}
          onChange={(e: any) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </StyledInputWrapper>
      {name && <ErrorBox>{error.error && errorMessage(error.name)}</ErrorBox>}
    </>
  );
};

export default TextInput;
