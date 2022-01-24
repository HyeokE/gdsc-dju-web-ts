import { atom } from 'recoil';

const RECRUITMENT = 'recruitment';
export const RecruitmentState = {
  frontend: false,
  backend: false,
  android: false,
  design: false,
  ml: false,
  beginner: false,
  home: false,
};
export const recruitmentState = atom<typeof RecruitmentState>({
  key: RECRUITMENT,
  default: RecruitmentState,
});
