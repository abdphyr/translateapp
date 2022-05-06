import { useMutation } from "react-query";
import axios, { AxiosResponse, AxiosError } from 'axios';
import { IResTranslate } from ".";

const options = (q: string, source: string, target: string) => ({
  method: 'POST',
  url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': '9f49a1a611msh8a4ea366e39baf5p1be11ejsn0d40b8bf05c0'
  },
  data: `{"q":"${q}","source":"${source}","target":"${target}"}`
});

const translate = ({ text, source, target }: { text: string, source: string, target: string }) => {
  return axios.request<IResTranslate>(options(text, source, target))
}

export const useTranslate = () => {
  return useMutation(translate)
}