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
  placeholder?: string;
  image?: string;
  file?: boolean;
  onChange: (e: string) => void;
}

const TextInput = (props: Iprops) => {
  const { name, error, placeholder, image, file, onChange } = props;

  return (
    <>
      <StyledInputWrapper>
        <StyledInput
          className={'formInput'}
          name={name}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </StyledInputWrapper>
    </>
  );
};

export default TextInput;
