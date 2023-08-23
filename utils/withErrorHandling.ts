import {
  APIGatewayProxyEventV2,
  APIGatewayProxyHandlerV2,
  Callback,
  Context
} from 'aws-lambda';
import HttpError from '../utils/httpError';

const withErrorHandling =
  (handler: APIGatewayProxyHandlerV2) =>
  async (
    event: APIGatewayProxyEventV2,
    context: Context,
    callback: Callback
  ) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
      return await handler(event, context, callback);
    } catch (err: any) {
      if (err instanceof HttpError) {
        return {
          statusCode: err.code,
          body: JSON.stringify({
            message: err.message
          })
        };
      }
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: err.message
        })
      };
    }
  };

export default withErrorHandling;
