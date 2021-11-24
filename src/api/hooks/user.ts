import { atom } from 'recoil';

export const USER = 'user';
export const UserState = {
  uid: '',
  name: '',
  nickName: '',
  phoneNumber: '',
};
export const userState = atom<typeof UserState>({
  key: USER,
  default: UserState,
});
