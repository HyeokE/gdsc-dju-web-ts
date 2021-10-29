import { atom } from 'recoil';

const POST_KEY = 'post';

export const PostState = {
  // title: '',
  // post: '',
  // createDate: '',
  // PostedDate: '',
  // creatorId: '',
  // category: '',
  // Tage: '',
};

export const postState = atom<typeof PostState>({
  key: POST_KEY,
  default: PostState,
});
