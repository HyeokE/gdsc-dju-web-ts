export type UserDataState = {
  documents: [
    {
      name: string;
      fields: {
        id: string | undefined;
        nickName: string;
        name: string;
        role: string;
        memberImg: string | undefined;
        introduce: string | undefined;
        position: string | undefined;
        email: string;
        uploadDate: string;
        phoneNumber: string;
        warning: number;
      };
    },
  ];
};
export type UserDataRow = {
  name: string;
  fields: {
    id: string | undefined;
    nickName: string;
    name: string;
    role: string;
    memberImg: string | undefined;
    introduce: string | undefined;
    position: string | undefined;
    email: string;
    uploadDate: string;
    phoneNumber: string;
    warning: number;
  };
};
export type UserDataField = {
  id: string | undefined;
  nickName: string;
  name: string;
  role: string;
  memberImg: string | undefined;
  introduce: string | undefined;
  position: string | undefined;
  email: string;
  uploadDate: string;
  phoneNumber: string;
  warning: number;
};
