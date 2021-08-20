import axios from 'axios';
import config from '../../config';

const requestBodyEx = {
  tracking_id: 'TEST_TRACK_ID',
  preferred_language_code: 'en-US',
  partner_config_override: {
    return_url: 'http://local.test.com:5000',
    return_url_description:
      'the url to return the merchant after the paypal onboarding process.',
  },
  operations: [
    {
      operation: 'API_INTEGRATION',
      api_integration_preference: {
        rest_api_integration: {
          integration_method: 'PAYPAL',
          integration_type: 'THIRD_PARTY',
          third_party_details: {
            features: ['PAYMENT', 'REFUND'],
          },
        },
      },
    },
  ],
  legal_consents: [
    {
      type: 'SHARE_DATA_CONSENT',
      granted: true,
    },
  ],
  products: ['EXPRESS_CHECKOUT'],
};

export const generateLink = async (
  resquestBody: Record<string, any> | null = null,
): Promise<any> => {
  const result = await axios({
    url: 'https://api-m.sandbox.paypal.com/v2/customer/partner-referrals',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.paypal.access_token}`,
    },
    params: resquestBody ?? requestBodyEx,
    proxy: {
      host: 'localhost',
      port: 5001,
    },
  });

  return result;
};
