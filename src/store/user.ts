import { atom } from 'recoil';

const USER_KEY = 'userData';

export const UserDataState = {
  user_id: 0,
  email: '',
  group: '',
  nickname: '',
  github: '',
  instagram: '',
  avaterURL: '',
  introduce: '',
};

export const userDataState = atom<typeof UserDataState>({
  key: USER_KEY,
  default: UserDataState,
});
