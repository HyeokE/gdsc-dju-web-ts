// https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)/documents/members?key=AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU
import axios from 'axios';
import { onBoardingMember, UserDataState } from './types';
import { OnboardingUserState } from '../store/onboardingUser';

export class GDSCApi {
  private API: string;
  constructor() {
    this.API =
      'http://ec2-15-165-170-84.ap-northeast-2.compute.amazonaws.com:8080';
  }
  postMemberNickname = (payload: typeof OnboardingUserState) => {
    return axios.post<typeof OnboardingUserState>(
      `${this.API}/api/onBoarding/nickname`,
      payload,
    );
  };
  getMemberNickname = () => {
    return axios.get<typeof OnboardingUserState>(
      `${this.API}/api/onBoarding/nickname`,
    );
  };
  postOnboardingMembers = (payload: onBoardingMember) => {
    return axios.post<onBoardingMember>(
      `${this.API}/api/onBoarding/join`,
      payload,
    );
  };
  SignIn = (payload: onBoardingMember) => {
    return axios.post<onBoardingMember>(`${this.API}/join`, payload);
  };
}
export default new GDSCApi();
