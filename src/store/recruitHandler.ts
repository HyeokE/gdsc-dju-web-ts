import { atom } from 'recoil';

const RECRUITMENT = 'recruitment';
export const RecruitmentState = {
  member: {
    frontend: false,
    backend: false,
    android: false,
    design: true,
    ml: false,
    beginner: false,
    option: false,
  },
};
export const recruitmentState = atom<typeof RecruitmentState>({
  key: RECRUITMENT,
  default: RecruitmentState,
});
