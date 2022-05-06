import { useQuery } from 'react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { IResLang } from '.';

const options = {
  method: 'GET',
  url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2/languages',
  headers: {
    'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': '9f49a1a611msh8a4ea366e39baf5p1be11ejsn0d40b8bf05c0'
  }
};

const getLanguages = () => {
  return axios.request<IResLang>(options)
}

export const useGetLangs = () => {
  return useQuery<AxiosResponse<IResLang>, AxiosError>('languages', getLanguages)
}
