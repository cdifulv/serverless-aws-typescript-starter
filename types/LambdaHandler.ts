import {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Context
} from 'aws-lambda';

type LambdaHandler = (
  event: APIGatewayProxyEventV2,
  context: Context
) => Promise<APIGatewayProxyResultV2>;

export default LambdaHandler;
