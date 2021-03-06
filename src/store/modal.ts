import { atom } from 'recoil';

export const MODAL = 'Modal';

export const MODAL_KEY = {
  ADMIN_SIGN_IN: 'adminSignIn',
  ADMIN_SIGN_UP: 'adminSignUp',
  ADMIN_SET_PROFILE: 'adminSetProfile',
  ADMIN_EDIT_MEMBER: 'adminEditMember',
  MEMBER_CARD: 'memberCard',
  APPLY_CHECK: 'applyCheck',
} as const;

export const ModalState = {
  [MODAL_KEY.ADMIN_SIGN_IN]: false,
  [MODAL_KEY.ADMIN_SIGN_UP]: false,
  [MODAL_KEY.ADMIN_SET_PROFILE]: false,
  [MODAL_KEY.ADMIN_EDIT_MEMBER]: false,
  [MODAL_KEY.MEMBER_CARD]: false,
  [MODAL_KEY.APPLY_CHECK]: false,
  selectedId: 0,
};
export const modalState = atom<typeof ModalState>({
  key: MODAL,
  default: ModalState,
});
