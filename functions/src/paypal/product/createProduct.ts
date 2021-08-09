import axios from 'axios';
import config from '../../../config';

export const createProduct = async (): Promise<Record<string, unknown>> => {
  const {status, data} = await axios({
    url: 'https://api-m.sandbox.paypal.com/v1/catalogs/products',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.paypal.access_token}`,
    },
    params: {
      name: 'Wecount',
      description: 'Support community',
      type: 'SERVICE',
      category: 'SOFTWARE',
    },
  });

  return {status, data};
};

/*
status code 201
return example
{
  "id": "PROD-7LR12491RA623190V",
  "name": "Wecount",
  "description": "Support community",
  "create_time": "2021-08-09T11:23:33Z",
  "links": [
    {
      "href": "https://api.sandbox.paypal.com/v1/catalogs/products/PROD-7LR12491RA623190V",
      "rel": "self",
      "method": "GET"
    },
    {
      "href": "https://api.sandbox.paypal.com/v1/catalogs/products/PROD-7LR12491RA623190V",
      "rel": "edit",
      "method": "PATCH"
    }
  ]
}
  */
