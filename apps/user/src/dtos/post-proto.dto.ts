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
  @IsString()
  @Type(() => String)
  public postId: string;

  @IsString()
  @Type(() => String)
  public postTitle: string;

  @IsString()
  @Type(() => String)
  public postUrl: string;
}

export interface IPostGrpcService {
  findOne: (request: PostProtoRequestDto) => Observable<PostProtoResponseDto>;
}
