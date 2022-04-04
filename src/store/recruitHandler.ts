import { atom, selector } from 'recoil';
import API from '../api/index';

const RECRUITMENT = 'recruitment';
const RECRUITMENT_SELECTOR = 'recruitmentSelector';
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

export const recruitmentSelector = selector({
  key: RECRUITMENT_SELECTOR,
  get: async () => {
    const res = await API.getRecruitStatus();
    return res.data.data;
  },
  set: ({ set }, newValue) => {
    set(recruitmentState, newValue);
  },
});
