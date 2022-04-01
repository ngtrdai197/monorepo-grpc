import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import {
  IPostGrpcService,
  PostProtoResponseDto,
} from 'apps/user/src/dtos/post-proto.dto';
import { plainToInstance } from 'class-transformer';
import { lastValueFrom } from 'rxjs';
import { GRPC_INJECTION_TOKEN } from './constants';
import { GrpcInject } from './decorators/grpc-client.decorator';

@Injectable()
export class GrpcClientService implements OnModuleInit {
  private grpcService: IPostGrpcService;
  constructor(
    @GrpcInject(GRPC_INJECTION_TOKEN) private readonly clientGrpc: ClientGrpc,
  ) {}

  public onModuleInit() {
    this.grpcService = this.clientGrpc.getService('PostsService');
  }

  public async getPost(): Promise<PostProtoResponseDto> {
    const data = await lastValueFrom(
      this.grpcService.findOne({ id: 'test_user_id' }),
    );
    return plainToInstance(PostProtoResponseDto, data);
  }
}
