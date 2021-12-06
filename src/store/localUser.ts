import { atom } from 'recoil';

export const LocalUser = 'localUser';
export const LocalUserState = {
  uid: '',
  name: '',
  nickName: '',
  phoneNumber: '',
};
export const localUserState = atom<typeof LocalUserState>({
  key: LocalUser,
  default: LocalUserState,
});
