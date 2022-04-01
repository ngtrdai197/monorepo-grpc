import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { Observable } from 'rxjs';

export class PostProtoRequestDto {
  @Expose({ name: 'id' })
  @IsString()
  @Type(() => String)
  public id: string;
}

export class PostProtoResponseDto {
  @Expose({ name: 'postUrl' })
  @IsString()
  @Type(() => String)
  public postUrl: string;

  @Expose({ name: 'postTitle' })
  @IsString()
  @Type(() => String)
  public postTitle: string;
}

export interface PostProtoResponse {
  // id: string;
  // post_content: string;
  url: string;
  postTitle: string;
}

export interface IPostGrpcService {
  findOne: (request: PostProtoRequestDto) => Observable<PostProtoResponse>;
}
