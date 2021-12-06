// https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)/documents/members?key=AIzaSyDrAEizOXHcCXYrQa96w6TxfddOS2Yb0tU
import axios from 'axios';
import { UserDataState } from './types';
import { firebase_key } from './firebase_key';

export class GDSCApi {
  private API: string;
  private KEY: string;
  constructor() {
    this.API =
      'https://firestore.googleapis.com/v1/projects/gdsc-dju/databases/(default)';
    this.KEY = firebase_key;
  }
  getMembers = () => {
    return axios.get<UserDataState>(
      `${this.API}/documents/members?key=${this.KEY}`,
    );
  };
}
