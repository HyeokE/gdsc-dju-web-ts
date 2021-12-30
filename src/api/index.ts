// https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)/documents/members?key=AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU
import axios from 'axios';
import { UserDataState } from './types';
import { OnboardingUserState } from '../store/onboardingUser';

export class GDSCApi {
  private API: string;
  private ANALYTICS_API: string;
  constructor() {
    this.ANALYTICS_API = 'https://www.googleapis.com/auth/analytics';
    this.API =
      'http://ec2-15-165-170-84.ap-northeast-2.compute.amazonaws.com:8080';
  }
  getMembers = () => {
    return axios.get<UserDataState>(`${this.API}/documents/members`);
  };
  postMemberNickname = (payload: typeof OnboardingUserState) => {
    return axios.post<typeof OnboardingUserState>(
      `${this.API}/api/onBoading/nickname`,
      payload,
    );
  };
  getMemberNickname = () => {
    return axios.get<typeof OnboardingUserState>(
      `${this.API}/api/onBoading/nickname`,
    );
  };
  postOnboardingMembers = (payload: typeof OnboardingUserState) => {
    return axios.get<typeof OnboardingUserState>(
      `${this.API}/api/onBoarding/join`,
      payload,
    );
  };
}
export default new GDSCApi();
