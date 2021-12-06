import { atom } from 'recoil';

const USER_KEY = 'userData';

export const UserListState = {
  id: '',
  nickName: '',
  name: '',
  role: '',
  memberImg: '',
  introduce: '',
  position: '',
  email: '',
  uploadDate: '',
  phoneNumber: '',
  warning: '',
};

export const userListState = atom<typeof UserListState>({
  key: USER_KEY,
  default: UserListState,
});
