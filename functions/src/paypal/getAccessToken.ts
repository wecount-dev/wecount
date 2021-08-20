import axios from 'axios';
import config from '../../config';

export const getAccessToken = async (): Promise<Record<string, any>> => {
  const {status, data} = await axios({
    url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'en_US',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: config.paypal.client_id,
      password: config.paypal.client_secret,
    },
    params: {
      grant_type: 'client_credentials',
    },
  });

  return {status, data};
};
