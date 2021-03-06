import {
  User,
  ResponseUser,
  MessageSucess,
  ResponseUserMsg,
} from '../../@types/types/user.types';

const ok = ({
  id,
  name,
  email,
  password,
}: User): ResponseUser => {
  const code = 200;
  return {
    statusCode: code,
    body: {
      id,
      name,
      email,
      password,
    },
  };
};

const create = ({ message }: MessageSucess): ResponseUserMsg => {
  const code = 201;
  return {
    statusCode: code,
    body: { message },
  };
};

const badRequest = ({
  id,
  name,
  email,
  password,
}: User): ResponseUser => {
  const code = 400;
  return {
    statusCode: code,
    body: {
      id,
      name,
      email,
      password,
    },
  };
};

const unauthorized = ({
  id,
  name,
  email,
  password,
}: User): ResponseUser => {
  const code = 401;
  return {
    statusCode: code,
    body: {
      id,
      name,
      email,
      password,
    },
  };
};
const notFound = ({
  id,
  name,
  email,
  password,
}: User): ResponseUser => {
  const code = 404;
  return {
    statusCode: code,
    body: {
      id,
      name,
      email,
      password,
    },
  };
};

const response = {
  ok,
  create,
  badRequest,
  unauthorized,
  notFound,
};

export default response;
