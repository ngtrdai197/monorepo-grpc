import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { PostProtoResponseDto } from './dtos/post-proto.dto';
import { PostService } from './post.service';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getHello(): string {
    return this.postService.getHello();
  }

  @GrpcMethod('PostsService', 'FindOne')
  public findOne({ id }: { id: string }) {
    const response = {
      post_id: id,
      post_title: this.postService.getHello(),
      post_url: 'https://coder-question.com/cq-blog/50464',
    };
    return response;
  }
}
