import { dbService } from '../../firebase/firebase';
interface Iprops {
  setData: (data: string[]) => void;
}
type Data = {
  email: string;
  nickName: string;
  major: string;
  interest: string;
}[];

export const getMemberList = async (setData: any) => {
  await dbService
    .collection('members')
    .get()
    .then((data) => {
      const memberList: any = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const emailList = memberList.map((data: any) => data.email);
      const nicknameList = memberList.map((data: any) => data.nickname);
      return {
        email: emailList,
        nickname: nicknameList,
      };
    });
};
export const getonBoardingMemberList = async (element: string) => {
  await dbService
    .collection('onboardingMembers')
    .get()
    .then((data) => {
      const memberList: any = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const emailList = memberList.map((data: any) => data.email);
      const nicknameList = memberList.map((data: any) => data.nickname);
      return {
        email: emailList,
        nickname: nicknameList,
      };
    });
};
