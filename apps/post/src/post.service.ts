import { Injectable } from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { PostProtoResponseDto } from './dtos/post-proto.dto';

@Injectable()
export class PostService {
  public getHello(): string {
    return 'Hello World!';
  }

  public findOne(id: string): PostProtoResponseDto {
    return plainToInstance(PostProtoResponseDto, {
      post_id: id,
      post_title: this.getHello(),
      post_url: 'https://coder-question.com/cq-blog/50464',
    });
  }
}
