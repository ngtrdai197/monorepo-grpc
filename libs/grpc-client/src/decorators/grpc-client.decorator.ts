import { Inject } from '@nestjs/common';

export const GrpcInject = (injectToken: string) => Inject(injectToken);
