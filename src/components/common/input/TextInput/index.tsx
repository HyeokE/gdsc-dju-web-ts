import React, { useState } from 'react';
import Folder from '../../../../img/Folder';
import {
  InputImageWrapper,
  StyledFileInput,
  StyledInput,
  StyledInputWrapper,
} from './styled';

export interface Iprops {
  name?: string;
  onChange?: () => void;
  value?: string;
  error?: string;
  placeholder?: string;
  image?: string;
  file?: boolean;
}

const TextInput = (props: Iprops) => {
  const { name, onChange, value, error, placeholder, image, file } = props;
  return (
    <>
      <StyledInputWrapper>
        {image === 'folder' && (
          <InputImageWrapper>
            <Folder />
          </InputImageWrapper>
        )}
        {file ? (
          <StyledFileInput>{placeholder}</StyledFileInput>
        ) : (
          <StyledInput
            className={'formInput'}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
          />
        )}
      </StyledInputWrapper>
    </>
  );
};

export default TextInput;
