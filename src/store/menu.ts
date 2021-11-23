import { atom } from 'recoil';
const MENU = 'menu';

export const MENU_KEY = {
  APPMENU: 'menu',
};
export const MenuState = {
  [MENU_KEY.APPMENU]: false,
};
export const menuState = atom<typeof MenuState>({
  key: MENU,
  default: MenuState,
});
