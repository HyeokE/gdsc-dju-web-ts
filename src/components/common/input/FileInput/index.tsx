import React, { forwardRef, useState } from 'react';
import Folder from '../../../../img/Folder';
import {
  InputImageWrapper,
  StyledFileInput,
  StyledInputWrapper,
} from '../TextInput/styled';

export interface Iprops {
  defaultPlaceholder: string;
  uploadFiles?: (file: HTMLInputElement) => void;
  errorToggle?: boolean;
  disabled?: boolean;
}

const FileInput = (props: Iprops, ref: React.RefObject<HTMLInputElement>) => {
  const { defaultPlaceholder, uploadFiles, errorToggle, disabled } = props;
  const [placeholder, setPlaceholder] = useState(
    defaultPlaceholder || 'Choose a file',
  );

  return (
    <StyledInputWrapper error={errorToggle} disabled={!disabled}>
      <InputImageWrapper>
        <Folder />
      </InputImageWrapper>
      <StyledFileInput
        onClick={() => {
          ref.current?.click();
        }}
      >
        {placeholder}
      </StyledFileInput>
      <input
        ref={ref}
        type={'file'}
        style={{ display: 'none' }}
        name={'fileName'}
        onChange={(e) => {
          e.target.files && setPlaceholder(e.target.files[0].name);
        }}
      />
    </StyledInputWrapper>
  );
};

export default forwardRef(FileInput);
