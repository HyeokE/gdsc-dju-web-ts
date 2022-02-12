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
  error?: string;
  placeholder?: string;
  image?: string;
  file?: boolean;
}

const TextInput = (props: Iprops) => {
  const { name, error, placeholder, image, file } = props;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
  };
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
            placeholder={placeholder}
          />
        )}
      </StyledInputWrapper>
    </>
  );
};

export default TextInput;
