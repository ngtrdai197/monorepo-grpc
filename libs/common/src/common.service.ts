import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ENV } from './constants/environment.def';

@Injectable()
export class CommonService {
  constructor(private readonly configService: ConfigService) {}

  public get GRPC_CLIENT_URL(): string {
    return `${this.configService.get<string>(
      ENV.GRPC_HOST,
    )}:${this.configService.get<string>(ENV.GRPC_PORT)}`;
  }

  public get USER_PORT(): number {
    return this.configService.get<number>('app.user_port');
  }
}
