import { useMutation } from "react-query";
import axios, { AxiosError, AxiosResponse } from 'axios';
import { IResTranslate } from ".";
import { baseUrl, mainHeaders } from "./env";

interface ITransArg {
  text: string,
  source: string,
  target: string
}

const options = ({ text, source, target }: ITransArg) => ({
  method: 'POST',
  url: baseUrl,
  headers: {
    'content-type': 'application/json',
    ...mainHeaders
  },
  data: `{"q":"${text}","source":"${source}","target":"${target}"}`
});

const translate = ({ text, source, target }: ITransArg) => {
  return axios.request<IResTranslate>(options({ text, source, target }))
}

export const useTranslate = () => {
  return useMutation<AxiosResponse<IResTranslate, any>, AxiosError, ITransArg>(translate)
}