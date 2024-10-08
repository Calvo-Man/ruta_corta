/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolsService } from 'src/rols/rols.service';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private readonly usuarioRepository: Repository<User>,
    private readonly rolService: RolsService
  ) {}
  
 

  
  findAll() {
    return this.usuarioRepository.find();
    
  }

  findOne(id: number) {
    return this.usuarioRepository.findOneBy(
      {
        id
      }
    );
    
  }
}
