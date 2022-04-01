import { GrpcClientModule } from '@app/grpc-client';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const GRPC_SERVER_HOST = 'localhost:3000';

@Module({
  imports: [
    GrpcClientModule.register({
      package: 'post',
      protoPath: join(__dirname, 'proto/post.proto'),
      url: GRPC_SERVER_HOST,
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
