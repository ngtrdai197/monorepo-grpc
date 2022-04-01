import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class PostProtoResponseDto {
  @Expose({ name: 'id' })
  @IsString()
  @Type(() => String)
  public postId: string;

  @Expose({ name: 'post_content' })
  @IsString()
  @Type(() => String)
  public postContent: string;
}
