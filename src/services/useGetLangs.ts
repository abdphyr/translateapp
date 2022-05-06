import { useQuery } from 'react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { IResLang } from '.';
import { baseUrl, mainHeaders } from './env';

const options = {
  method: 'GET',
  url: `${baseUrl}/languages`,
  headers: mainHeaders
};

const getLanguages = () => {
  return axios.request<IResLang>(options)
}

export const useGetLangs = () => {
  return useQuery<AxiosResponse<IResLang>, AxiosError>('languages', getLanguages)
}
