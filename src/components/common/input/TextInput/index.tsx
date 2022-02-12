import React, { useRef, useState } from 'react';
import Folder from '../../../../img/Folder';
import {
  InputImageWrapper,
  StyledFileInput,
  StyledInput,
  StyledInputWrapper,
} from './styled';

export interface Iprops {
  name?: string;
  error?: string;
  setError?: (error: boolean) => void;
  placeholder?: string;
  image?: string;
  file?: boolean;
  onChange: (e: any) => void;
  type?: string;
}

const TextInput = (props: Iprops) => {
  const { name, error, placeholder, image, file, onChange, type } = props;

  return (
    <>
      <StyledInputWrapper>
        <StyledInput
          className={'formInput'}
          name={name}
          type={type}
          onChange={(e: any) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </StyledInputWrapper>
    </>
  );
};

export default TextInput;
