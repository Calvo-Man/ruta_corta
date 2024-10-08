/* eslint-disable prettier/prettier */
import {  Controller, Get, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
  constructor(private readonly usuarioService: UserService) {}

  @Post('upload-json')
  @UseInterceptors(FileInterceptor('file'))
  

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }
}
