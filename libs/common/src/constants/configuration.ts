import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  host: process.env.GRPC_HOST || 'localhost',
  port: process.env.GRPC_PORT || 3000,
  user_port: process.env.USER_APP_PORT || 3001,
}));
