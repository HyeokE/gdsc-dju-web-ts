// https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)/documents/members?key=AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU
import axios from 'axios';
import { UserDataState } from './types';

export class GDSCApi {
  private API: string;

  constructor() {
    this.API =
      'https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)';
  }
  getMembers = () => {
    return axios.get<UserDataState>(`${this.API}/documents/members`);
  };
}
export default new GDSCApi();
