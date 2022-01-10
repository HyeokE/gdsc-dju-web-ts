export type UserDataState = {
  id: string;
  nickName: string;
  name: string;
  role: string;
  memberImg: string;
  introduce: string;
  position: string;
  email: string;
  uploadDate: string;
  phoneNumber: string;
  warning: number;
};
export type UserDataRow = {
  name: string;
  fields: {
    id: string | undefined;
    nickName: string;
    name: string;
    role: string;
    memberImg: string | undefined;
    introduce: string | undefined;
    position: string | undefined;
    email: string;
    uploadDate: string;
    phoneNumber: string;
    warning: number;
  };
};
export type UserDataField = {
  id: string | undefined;
  nickName: string;
  name: string;
  role: string;
  memberImg: string | undefined;
  introduce: string | undefined;
  position: string | undefined;
  email: string;
  uploadDate: string;
  phoneNumber: string;
  warning: number;
};
export type onBoardingMember = {
  email: string;
  nickname: string;
  major: string;
  interest: string;
};
export type nickNameDataType = {
  nickname: string;
}[];
export type navigationDataType = { route: string; title: string }[];
