import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PostModule } from './post.module';
import { ENV } from '@app/common/constants/environment.def';
import { CommonService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(PostModule);
  const common = app.get(CommonService);
  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.GRPC,
      options: {
        package: 'post',
        protoPath: join(__dirname, 'proto/post.proto'),
        url: common.GRPC_CLIENT_URL,
        loader: {
          keepCase: true, // FIXME: enable underscore, field_name do not work without this, must be fieldName
        },
      },
    },
    {
      inheritAppConfig: true, // enable global pipes & exception filter
    },
  );
  await app
    .startAllMicroservices()
    .then(() =>
      Logger.log(
        `POST SERVICE LISTENING ON: ${common.GRPC_CLIENT_URL}`,
        'GRPC',
      ),
    );
}
bootstrap();
