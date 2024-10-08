import { PartialType } from '@nestjs/mapped-types';
import { CreateApiRestDto } from './create-api-rest.dto';

export class UpdateApiRestDto extends PartialType(CreateApiRestDto) {}
