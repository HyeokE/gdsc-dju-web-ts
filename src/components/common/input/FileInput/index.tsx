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
}

const FileInput = (props: Iprops) => {
  const { placeholder } = props;
  const [uploadProgress, setUploadProgress] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const uploadFiles = async () => {
    if (input.current?.files !== null) {
      const file = input.current?.files[0];
      console.log(file);
      if (!file) return;
      const storageRef = ref(storage, `${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      await uploadTask.on('state_changed', (snapshot: any) => {
        const progress =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
        console.log(progress);
      }),
        uploadTask.then(async () => {
          getDownloadURL(storageRef).then((url: string) => {
            console.log(url);
          });
        });
    }
  };

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
      <button onClick={uploadFiles}>Upload</button>
    </>
  );
};

export default FileInput;
