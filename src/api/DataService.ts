import { getAPIClient } from './axios';
import axios, { AxiosError } from 'axios';

interface DataServiceParams {
  method?: 'POST' | 'PATCH' | 'DELETE' | 'GET';
  data?: any;
  url: string;
}

export const DataService = async ({ url, data, method = 'POST' }: DataServiceParams) => {
  const client = getAPIClient();

  try {
    const response = await client({
      data,
      method,
      url,
    });

    return response;
  } catch (err) {
    const errors = err as Error | AxiosError;
    if (axios.isAxiosError(errors) && errors.response) {
      return {
        data: {},
        error: true,
        message: errors.response.data?.message,
        statusCode: errors.response.data?.statusCode,
      };
    }
  }
};
