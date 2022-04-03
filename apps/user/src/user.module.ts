import { CommonModule } from '@app/common';
import { GrpcClientModule } from '@app/grpc-client';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [
    GrpcClientModule.register({
      package: 'post',
      protoPath: join(__dirname, 'proto/post.proto'),
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
