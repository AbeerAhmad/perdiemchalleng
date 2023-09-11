import Axios, { AxiosInstance, AxiosResponse } from 'axios';
import { UserState } from '../../types/authTypes';

class ApiService {
  private static instance: ApiService;

  private baseUrl!: string;
  public _axiosInstance!: AxiosInstance;

  constructor(baseURL: string) {
    if (!ApiService.instance) {
      ApiService.instance = this;

      this.baseUrl = baseURL;
      this._axiosInstance = Axios.create({
        baseURL,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer Wookie2019',
        },
        withCredentials: true,
      });
    }

    return ApiService.instance;
  }

  public fetchPosts = async (): Promise<AxiosResponse<any>> => {
    return this._axiosInstance.get(`posts`);
  };

  public getTodos = async (): Promise<AxiosResponse<any>> => {
    return this._axiosInstance.get(`todos`);
  };
  public login = async (
    data: { email: string; password: string },
    userList: UserState[],
  ): Promise<UserState> => {
    const foundUser = userList.find(user => user.email?.toLowerCase() === data?.email?.toLowerCase());
    if (!foundUser) {
      throw new Error('User not found! Please sign up');
    }
    if (foundUser.password !== data.password) {
      throw new Error('Password does not match');
    }

    return foundUser;
  };
}
const API_BASEURL = 'https://jsonplaceholder.typicode.com/';
export const apiService = new ApiService(API_BASEURL);
