import { AxiosResponse } from 'axios';
import Repository from './Repository';

const resource: string = '/countries';

interface CountryRepositoryInterface {
  getAll: () => Promise<AxiosResponse<any>>;
  get: (code: string) => Promise<AxiosResponse<any>>;
  post: (payload: { code: string; name: string }) => Promise<AxiosResponse<any>>;
  put: (payload: { code: string; name: string }) => Promise<AxiosResponse<any>>;
  delete: (code: string) => Promise<AxiosResponse<any>>;
}

// TODO: レスポンスのany型を詳細に定義する
const CountryRepository: CountryRepositoryInterface = {
  getAll: (): Promise<AxiosResponse<any>> => Repository.get(`${resource}`),

  get: (code: string): Promise<AxiosResponse<any>> => Repository.get(`${resource}/${code}`),

  post: (payload: { code: string; name: string }): Promise<AxiosResponse<any>> => Repository.post(`${resource}`, payload),

  put: (payload: { code: string; name: string }): Promise<AxiosResponse<any>> => Repository.put(`${resource}`, payload),

  delete: (code: string): Promise<AxiosResponse<any>> => Repository.delete(`${resource}/${code}`),
};

export { CountryRepositoryInterface, CountryRepository };
