import { DynamicModule, Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { GRPC_INJECTION_TOKEN } from './constants';
import { GrpcClientService } from './grpc-client.service';

@Module({})
export class GrpcClientModule {
  static register(config: {
    package: string;
    protoPath: string;
    url: string;
  }): DynamicModule {
    return {
      module: GrpcClientModule,
      providers: [
        GrpcClientService,
        {
          provide: GRPC_INJECTION_TOKEN,
          useFactory: () => {
            return ClientProxyFactory.create({
              transport: Transport.GRPC,
              options: {
                package: config.package,
                protoPath: config.protoPath,
                url: config.url,
              },
            });
          },
        },
      ],
      exports: [GrpcClientService],
    };
  }
}
