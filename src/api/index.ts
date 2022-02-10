// https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)/documents/members?key=AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU
import axios from 'axios';
import {
  getRecruitmentInfoDataType,
  nickNameDataType,
  onBoardingMember,
  recruitmentInfoDataType,
  UserDataState,
} from './types';
import { OnboardingUserState } from '../store/onboardingUser';

export class GDSCApi {
  private API: string;
  private OauthAPI: string;
  constructor() {
    this.API = 'https://gdsc-dju.com';
    this.OauthAPI =
      'https://www.googleapis.com/oauth2/v2/userinfo?access_token=';
  }
  getMemberNickname = () => {
    return axios.get<nickNameDataType>(
      `${this.API}/api/member/onBoarding/nickname`,
    );
  };
  postOnboardingMembers = (payload: onBoardingMember) => {
    return axios.post<onBoardingMember>(
      `${this.API}/api/member/onBoarding/join`,
      payload,
    );
  };
  getRecruitmentInfo = () => {
    return axios.get<getRecruitmentInfoDataType>(
      `${this.API}/api/support/limit`,
    );
  };
  putRecruitmentInfo = (payload: recruitmentInfoDataType) => {
    return axios.put<recruitmentInfoDataType>(
      `${this.API}/api/support/limit/update`,
      payload,
    );
  };
  getOauthUser = (token: string) => {
    return axios.get(`${this.OauthAPI}${token}`, {
      headers: {
        authorization: `token ${token}`,
        accept: 'application/json',
      },
    });
  };
}
export default new GDSCApi();
