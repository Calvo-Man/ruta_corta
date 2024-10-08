/* eslint-disable prettier/prettier */
import { User } from "src/user/entities/user.entity";
import { RolStatus } from "src/user/status/RolStatus.status";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Rol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: RolStatus,
        default: RolStatus.USER, // Puedes definir un valor por defecto
      })
      status: RolStatus;

      @OneToMany(()=>User,(user)=> user.role)
      users : User[]
    
}
