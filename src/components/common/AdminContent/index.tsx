import React from 'react';
import { TopMargin } from '../../../Layout';
import MemberPage from './MembersPage';
import SettingPage from './SettingPage';

export type UserDataState = {
  id: string | undefined;
  nickName: string | undefined;
  name: string | undefined;
  role: string | undefined;
  memberImg: string | undefined;
  introduce: string | undefined;
  position: string | undefined;
  email: string | undefined;
  uploadDate: string;
  phoneNumber: string | undefined;
  warning: number | undefined;
};

const AdminContent: React.FC<{ selectedCategory: string }> = ({
  selectedCategory,
}) => {
  // const uploadMembers = async (i: number) => {
  //   try {
  //     await dbService.collection('members').doc().set({
  //       nickName: memberList[i].nickName,
  //       name: memberList[i].name,
  //       role: memberList[i].role,
  //       memberImg: memberList[i].memberImg,
  //       introduce: memberList[i].introduce,
  //       position: memberList[i].position,
  //       email: memberList[i].email,
  //       warning: memberList[i].warning,
  //       uploadDate: Date.now(),
  //       phoneNumber: memberList[i].phoneNumber,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   for (let a = 0; a < memberList.length; a++) {
  //     uploadMembers(a);
  //   }
  // }, []);
  return (
    <>
      <TopMargin />
      {selectedCategory === 'Members' ? <MemberPage /> : null}
      {selectedCategory === 'Setting' ? <SettingPage /> : null}
    </>
  );
};

export default AdminContent;
