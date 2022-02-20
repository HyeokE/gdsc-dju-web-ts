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
  value: string;
}

const checkValue = ({ type, value }: { type: string; value: string }) => {
  let validate;
  switch (type) {
    case 'name':
      return (validate = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/.test(value));
    case 'phoneNumber':
      return (validate = /^01([0|1|6|7|8|9])-?([0-9]{4})-?([0-9]{4})$/.test(
        value,
      ));
    case 'email':
      return (validate =
        /^[0-9a-zA-Z]([-_.\]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.\]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
          value,
        ));
    case 'gmail':
      return (validate = /^[0-9a-zA-Z]([-_.\]?[0-9a-zA-Z])*@gmail.com$/.test(
        value,
      ));
    case 'major':
      return (validate = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{4,}$/.test(value));
    case 'studentID':
      return (validate = /^[0-9]{8}$/.test(value));
    case 'link':
      return (validate = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi.test(
        value,
      ));
  }
};

export const validateData = (props: applicantDataType) => {
  const { name, value } = props;
  switch (name) {
    case 'name':
      return checkValue({ type: 'name', value });
    case 'phoneNumber':
      return checkValue({ type: 'phoneNumber', value });
    case 'email':
      return checkValue({ type: 'email', value });
    case 'gmail':
      return checkValue({ type: 'gmail', value });
    case 'major':
      return checkValue({ type: 'major', value });
    case 'studentID':
      return checkValue({ type: 'studentID', value });
    case 'link':
      return checkValue({ type: 'link', value });
    default:
      return;
  }
};
export const errorMessage = (name: string) => {
  switch (name) {
    case 'name':
      return '2글자 이상 입력해주세요';
    case 'phoneNumber':
      return '올바른 전화번호를 입력해주세요';
    case 'email':
      return '올바른 이메일을 입력해주세요';
    case 'gmail':
      return 'gmail 형식으로 입력해주세요.';
    case 'major':
      return '학과를 입력해주세요';
    case 'studentID':
      return '학번 8자리를 입력해주세요.';
    case 'link':
      return 'https:// 또는 http:// 로 시작하는 주소를 입력해주세요.';
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
  error: boolean;
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
    error,
  } = props;
  if (
    position &&
    name &&
    phoneNumber &&
    email &&
    major &&
    studentID &&
    placeholder !== '지원서/자기소개서/이력서 업로드 (PDF)' &&
    link0 &&
    !error
  ) {
    setFormSubmit(true);
  } else {
    setFormSubmit(false);
  }
};
