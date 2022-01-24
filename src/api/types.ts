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
export type onBoardingMember = {
  email: string;
  nickname: string;
  major: string;
  interest: string;
};
export type recruitmentInfoDataType = {
  frontend: boolean;
  backend: boolean;
  android: boolean;
  design: boolean;
  ml: boolean;
  beginner: boolean;
  home: boolean;
};
export type nickNameDataType = {
  nickname: string;
}[];
export type navigationDataType = { route: string; title: string }[];
