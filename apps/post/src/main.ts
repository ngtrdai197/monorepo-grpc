import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PostModule } from './post.module';

async function bootstrap() {
  const app = await NestFactory.create(PostModule);
  const PORT: number = 3000;
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'post',
      protoPath: join(__dirname, 'proto/post.proto'),
      url: `localhost:${PORT}`,
    },
  });
  (await app.startAllMicroservices()).listen(PORT, () =>
    Logger.log(`POST SERVICE LISTENING ON PORT ${PORT}`, 'GRPC'),
  );
}
bootstrap();
