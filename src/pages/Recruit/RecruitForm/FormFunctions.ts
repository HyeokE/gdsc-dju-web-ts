import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../../firebase/firebase.config';

export const positionHandler = ({
  value,
  setValue,
}: {
  value: string | undefined;
  setValue: (value: string) => void;
}) => {
  switch (value as string) {
    case 'frontend':
      return setValue('Frontend Developer');
    case 'backend':
      return setValue('Backend Developer');
    case 'design':
      return setValue('UX/UI Designer');
    case 'android':
      return setValue('Android Developer');
    case 'beginner':
      return setValue('Beginner Position');
    case 'ml':
      return setValue('Machine Learning Engineer');
    default:
      return;
  }
};
interface applicantDataType {
  name: string;
  data: string;
}
const requireValue = (data: string) => {
  if (data) {
    return 'Required';
  }
  return '';
};
const checkValue = ({ type, data }: { type: string; data: string }) => {
  let validate;
  switch (type) {
    case 'phoneNumber':
      return (validate = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/.test(
        data,
      ));
    case 'email':
      return (validate =
        /^[0-9a-zA-Z]([-_.\]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.\]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
          data,
        ));
    case 'gmail':
      return (validate = /^[0-9a-zA-Z]([-_.\]?[0-9a-zA-Z])*@gmail.com$/.test(
        data,
      ));
    case 'studentID':
      return (validate = /^[0-9]{8}$/.test(data));
  }
};

const validateData = (props: applicantDataType) => {
  const { name, data } = props;
  switch (name) {
    case 'name':
      requireValue(data) && '필수 항목입니다.';
      break;
    case 'phoneNumber':
      return 'Email is required';
    case 'email':
      return checkValue({ type: 'email', data });
    case 'major':
      return checkValue({ type: 'major', data });
    case 'studentID':
      return checkValue({ type: 'studentID', data });
    case 'link':
      return checkValue({ type: 'link', data });
    default:
      return;
  }
};
interface formDataType {
  position: string;
  name: string;
  phoneNumber: string;
  email: string;
  major: string;
  studentID: string;
  link0: string;
  placeholder: string;
  setFormSubmit: (value: boolean) => void;
}
export const checkForm = (props: formDataType) => {
  const {
    position,
    name,
    phoneNumber,
    email,
    major,
    studentID,
    link0,
    placeholder,
    setFormSubmit,
  } = props;
  if (
    position &&
    name &&
    phoneNumber &&
    email &&
    major &&
    studentID &&
    placeholder !== '지원서/자기소개서/이력서 업로드 (PDF)' &&
    link0
  ) {
    setFormSubmit(true);
  }
};
