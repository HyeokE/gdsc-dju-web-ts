import { atom } from 'recoil';

export const MODAL = 'Modal';

export const MODAL_KEY = {
  ADMIN_SIGN_IN: 'adminSignIn',
  ADMIN_SIGN_UP: 'adminSignUp',
  ADMIN_SET_PROFILE: 'adminSetProfile',
} as const;

export const ModalState = {
  [MODAL_KEY.ADMIN_SIGN_IN]: false,
  [MODAL_KEY.ADMIN_SIGN_UP]: false,
  [MODAL_KEY.ADMIN_SET_PROFILE]: false,
};
export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
