import React, { useRef, useState } from 'react';
import Folder from '../../../../img/Folder';
import {
  InputImageWrapper,
  StyledFileInput,
  StyledInputWrapper,
} from '../TextInput/styled';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../../firebase/firebase.config';

export interface Iprops {
  placeholder: string;
  uploadFiles: (file: HTMLInputElement) => void;
}

const FileInput = (props: Iprops) => {
  const { placeholder, uploadFiles } = props;

  const input = useRef<HTMLInputElement>(null);

  return (
    <>
      <StyledInputWrapper>
        <InputImageWrapper>
          <Folder />
        </InputImageWrapper>
        <StyledFileInput onClick={() => input.current?.click()}>
          {placeholder}
        </StyledFileInput>
        <input ref={input} type={'file'} style={{ display: 'none' }} />
      </StyledInputWrapper>
      <button
        onClick={() => {
          input.current && uploadFiles(input.current);
        }}
      >
        Upload
      </button>
    </>
  );
};

export default FileInput;
