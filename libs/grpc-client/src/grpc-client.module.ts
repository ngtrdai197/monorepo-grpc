import { CommonModule, CommonService } from '@app/common';
import { ENV } from '@app/common/constants/environment.def';
import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { GRPC_INJECTION_TOKEN } from './constants';
import { GrpcClientService } from './grpc-client.service';

@Module({})
export class GrpcClientModule {
  static register(config: {
    package: string;
    protoPath: string;
  }): DynamicModule {
    return {
      module: GrpcClientModule,
      imports: [CommonModule],
      providers: [
        GrpcClientService,
        {
          provide: GRPC_INJECTION_TOKEN,
          useFactory: (commonService: CommonService) => {
            return ClientProxyFactory.create({
              transport: Transport.GRPC,
              options: {
                package: config.package,
                protoPath: config.protoPath,
                url: `${commonService.GRPC_CLIENT_URL}`,
              },
            });
          },
          inject: [CommonService],
        },
      ],
      exports: [GrpcClientService],
    };
  }
}
