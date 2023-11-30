import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {getToken} from './token.ts';
import {StatusCodes} from 'http-status-codes';
import {store} from '../store';
import {setSignInErrorMessage} from '../store/actions.ts';

type DetailMessageType = {
  messages: string[];
}

type MessageType = {
  type: string;
  message: string;
  details: DetailMessageType[];
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const SERVER_URL = 'https://13.design.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export const createApi = (): AxiosInstance => {
  const api = axios.create({baseURL: SERVER_URL, timeout: REQUEST_TIMEOUT});

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage: MessageType = <MessageType>(error.response.data);

        store.dispatch(setSignInErrorMessage(detailMessage.details[0].messages[0]));
      }

      throw error;
    }
  );

  return api;
};
