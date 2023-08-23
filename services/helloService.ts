import HttpError from '../utils/httpError';

export default async () => {
  // Connect to DB
  // Do some business logic
  // Return data

  const randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber % 2 === 1) {
    throw new HttpError('This is a bad request example', 400);
  }

  return {
    message: 'Hello World!'
  };
};
