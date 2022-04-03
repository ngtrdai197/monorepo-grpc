import { GRPC_CONSTANT } from 'apps/post/src/constants/grpc.constant';
import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { instanceToPlain } from 'class-transformer';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getHello(): string {
    return this.postService.getHello();
  }

  @GrpcMethod(
    GRPC_CONSTANT.POST.SERVICE_NAME,
    GRPC_CONSTANT.POST.METHODS.FIND_ONE,
  )
  public findOne({ id }: { id: string }) {
    const data = this.postService.findOne(id);
    return instanceToPlain(data);
  }
}
