import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class PostProtoResponseDto {
  @Expose({ name: 'post_id' })
  @IsString()
  @Type(() => String)
  public postId: string;

  @Expose({ name: 'post_title' })
  @IsString()
  @Type(() => String)
  public postTitle: string;

  @Expose({ name: 'post_url' })
  @IsString()
  @Type(() => String)
  public postUrl: string;
}
