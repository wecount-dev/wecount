import axios from 'axios';
import config from '../../../config';

// paypal subscriber flow
export const createSubscription = async (): Promise<
  Record<string, unknown>
> => {
  const {status, data} = await axios({
    url: 'https://api-m.sandbox.paypal.com/v1/billing/subscriptions',
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${config.paypal.access_token}`,
      Prefer: 'return=representation',
      'Content-Type': 'application/json',
      'PayPal-Request-Id': 'test-id',
    },
    params: {
      plan_id: 'P-4DB5144860082564AMEIREZI',
      start_time: '2018-11-01T00:00:00Z',
      quantity: '20',
      shipping_amount: {
        currency_code: 'USD',
        value: '10.00',
      },
      subscriber: {
        name: {
          given_name: 'John',
          surname: 'Doe',
        },
        email_address: 'customer@example.com',
        shipping_address: {
          name: {
            full_name: 'John Doe',
          },
          address: {
            address_line_1: '2211 N First Street',
            address_line_2: 'Building 17',
            admin_area_2: 'San Jose',
            admin_area_1: 'CA',
            postal_code: '95131',
            country_code: 'US',
          },
        },
        //For Direct card flow
        //     "payment_source":{
        //         "card":{
        //            "number":"4111111111111111",
        //            "expiry":"2020-02",
        //            "security_code":"121",
        //            "name":"John Doe",
        //            "billing_address":{
        //               "address_line_1":"2211 N First Street",
        //               "address_line_2":"17.3.160",
        //               "admin_area_1":"CA",
        //               "admin_area_2":"San Jose",
        //               "postal_code":"95131",
        //               "country_code":"US"
        //            }
        //         }
      },
      application_context: {
        brand_name: 'example',
        locale: 'en-US',
        shipping_preference: 'SET_PROVIDED_ADDRESS',
        user_action: 'SUBSCRIBE_NOW',
        payment_method: {
          payer_selected: 'PAYPAL',
          payee_preferred: 'IMMEDIATE_PAYMENT_REQUIRED',
        },
        return_url: 'https://example.com/returnUrl',
        cancel_url: 'https://example.com/cancelUrl',
      },
    },
  });

  return {status, data};
};

/*
For Paypal subscriber flow

return status 201
{
  "status": "APPROVAL_PENDING",
  "status_update_time": "2021-08-09T11:37:13Z",
  "id": "I-CYTBK32UCCDG",
  "plan_id": "P-4DB5144860082564AMEIREZI",
  "start_time": "2021-08-10T06:00:00Z",
  "quantity": "1",
  "subscriber": {
    "email_address": "customer@example.com",
    "name": {
      "given_name": "John",
      "surname": "Doe"
    }
  },
  "create_time": "2021-08-09T11:37:13Z",
  "plan_overridden": false,
  "links": [
    {
      "href": "https://www.sandbox.paypal.com/webapps/billing/subscriptions?ba_token=BA-8DM20690S1988993Y",
      "rel": "approve",
      "method": "GET"
    },
    {
      "href": "https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-CYTBK32UCCDG",
      "rel": "edit",
      "method": "PATCH"
    },
    {
      "href": "https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-CYTBK32UCCDG",
      "rel": "self",
      "method": "GET"
    }
  ]
}
*/

/*

For Direct card flow
{
    "status": "ACTIVE",
    "status_update_time": "2020-03-22T10:43:33Z",
    "id": "I-EXCCE2B4J0D5",
    "plan_id": "P-4ML8771254154362WXNWU5BC",
    "start_time": "2020-05-01T00:00:00Z",
    "quantity": "20",
    "shipping_amount": {
        "currency_code": "USD",
        "value": "10.0"
    },
    "subscriber": {
        "name": {
            "given_name": "John",
            "surname": "Doe"
        },
        "email_address": "customer@example.com",
        "shipping_address": {
            "name": {
                "full_name": "John Doe"
            },
            "address": {
                "address_line_1": "2211 N First Street",
                "address_line_2": "Building 17",
                "admin_area_2": "San Jose",
                "admin_area_1": "CA",
                "postal_code": "95131",
                "country_code": "US"
            }
        },
        "payment_source": {
            "card": {
                "last_digits": "4781",
                "name": "John Doe",
                "billing_address": {
                    "address_line_1": "2211 N First Street",
                    "address_line_2": "17.3.160",
                    "admin_area_2": "San Jose",
                    "admin_area_1": "CA",
                    "postal_code": "95131",
                    "country_code": "US"
                }
            }
        }
    },
    "create_time": "2020-03-22T10:43:33Z",
    "links": [
        {
            "href": "https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-EXCCE2B4J0D5/cancel",
            "rel": "cancel",
            "method": "POST"
        },
        {
            "href": "https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-EXCCE2B4J0D5",
            "rel": "edit",
            "method": "PATCH"
        },
        {
            "href": "https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-EXCCE2B4J0D5",
            "rel": "self",
            "method": "GET"
        },
        {
            "href": "https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-EXCCE2B4J0D5/suspend",
            "rel": "suspend",
            "method": "POST"
        },
        {
            "href": "https://api-m.sandbox.paypal.com/v1/billing/subscriptions/I-EXCCE2B4J0D5/capture",
            "rel": "capture",
            "method": "POST"
        }
    ]
}
*/
