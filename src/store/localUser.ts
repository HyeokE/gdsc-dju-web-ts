import { atom } from 'recoil';

export const LocalUser = 'localUser';
export const UserState = {
  uid: '',
  name: '',
  nickName: '',
  phoneNumber: '',
};
export const userState = atom<typeof UserState>({
  key: LocalUser,
  default: UserState,
});
