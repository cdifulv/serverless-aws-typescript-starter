/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  APIGatewayProxyEventV2,
  APIGatewayProxyHandlerV2,
  Callback,
  Context
} from 'aws-lambda';
import withErrorHandling from '../utils/withErrorHandling';
import getHelloService from '../services/helloService';

const main: APIGatewayProxyHandlerV2 = async (
  event: APIGatewayProxyEventV2,
  context: Context,
  callback: Callback
) => {
  const response = await getHelloService();
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};

export const handler = withErrorHandling(main);
