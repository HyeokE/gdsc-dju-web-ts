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
  onClick?: (e: any) => void;
}

const TextInput = (props: Iprops) => {
  const { name, error, placeholder, image, file, onClick } = props;
  const input = useRef<HTMLInputElement>(null);
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
          <>
            <StyledFileInput onClick={() => input.current?.click()}>
              {placeholder}
            </StyledFileInput>
            <input
              ref={input}
              type={'file'}
              style={{ display: 'none' }}
              onClick={onClick}
            />
            <button>Upload</button>
          </>
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
