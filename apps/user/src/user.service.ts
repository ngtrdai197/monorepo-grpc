import { GrpcClientService } from '@app/grpc-client';
import { Injectable } from '@nestjs/common';
import { PostProtoResponseDto } from './dtos/post-proto.dto';

@Injectable()
export class UserService {
  constructor(private readonly grpcClient: GrpcClientService) {}
  getHello(): string {
    return 'Hello World!';
  }

  public async getPost(): Promise<PostProtoResponseDto> {
    return this.grpcClient.getPost();
  }
}
