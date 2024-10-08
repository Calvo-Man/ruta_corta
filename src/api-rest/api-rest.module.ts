import { Module } from '@nestjs/common';
import { ApiRestService } from './api-rest.service';
import { ApiRestController } from './api-rest.controller';

@Module({
  controllers: [ApiRestController],
  providers: [ApiRestService],
})
export class ApiRestModule {}
