import { CommonService } from '@app/common';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  const common = app.get(CommonService);
  await app.listen(common.USER_PORT, () =>
    Logger.log(
      `USER SERVICE LISTENING ON: 0.0.0.0:${common.USER_PORT}`,
      'Bootstrap',
    ),
  );
}
bootstrap();
