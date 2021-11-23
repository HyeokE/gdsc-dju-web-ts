import React, { useEffect, useState } from 'react';
import {
  TableWithBrowserPagination,
  Column,
  Badge,
} from 'react-rainbow-components';
import { dbService } from '../../../firebase/firebase';
import { memberList } from '../../../api/memberList';
import { UserDataState } from '../../../store/user';

export interface UserDataState {
  nickName: string;
  name: string;
  role: string;
  memberImg: string;
  introduce: string;
  position: string;
  email: string;
  phoneNumber: string;
  warning: number;
}

const AdminContent: React.FC<{ selectedCategory: string }> = ({
  selectedCategory,
}) => {
  const [memberData, setMemberData] = useState<typeof UserDataState>();
  const getMemberList = async () => {
    try {
      await dbService.collection('members').onSnapshot((data: any) => {
        setMemberData(data);
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMemberList();
    console.log(memberData);
  }, []);
  // const uploadMembers = async (i: number) => {
  //   try {
  //     await dbService.collection('members').doc(memberList[i].email).set({
  //       nickName: memberList[i].nickName,
  //       name: memberList[i].name,
  //       role: memberList[i].role,
  //       memberImg: memberList[i].memberImg,
  //       introduce: memberList[i].introduce,
  //       position: memberList[i].position,
  //       email: memberList[i].email,
  //       warning: memberList[i].warning,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   for (let a = 0; a < memberList.length; a++) {
  //     uploadPost(a);
  //   }
  // });
  return (
    <>
      {selectedCategory === 'Members' ? (
        <div>
          <TableWithBrowserPagination
            pageSize={5}
            data={memberList}
            keyField="id"
          >
            <Column header="role" field="role" />
            <Column header="name" field="name" />
            <Column header="nickName" field="nickName" />
            <Column header="Email" field="email" />
            <Column header="Date of Birth" field="dob" />
            <Column header="City" field="city" />
          </TableWithBrowserPagination>
        </div>
      ) : (
        <div>{selectedCategory}</div>
      )}
    </>
  );
};

export default AdminContent;
