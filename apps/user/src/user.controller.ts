import { Controller, Get } from '@nestjs/common';
import { PostProtoResponseDto } from './dtos/post-proto.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Get('post')
  public getPost(): Promise<PostProtoResponseDto> {
    return this.userService.getPost();
  }
}
