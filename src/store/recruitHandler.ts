import { atom } from 'recoil';

const RECRUITMENT = 'recruitment';
export const RecruitmentState = {
  member: {
    option: false,
    startDate: '',
    endDate: '',
  },
  coreMember: {
    option: false,
    startDate: '',
    endDate: '',
  },
};
export const recruitmentState = atom<typeof RecruitmentState>({
  key: RECRUITMENT,
  default: RecruitmentState,
});
