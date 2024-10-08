/* eslint-disable prettier/prettier */
import { Rol } from "src/rols/entities/rol.entity";
import {  Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User  {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Rol, (role) => role.users)
  role: Rol;
   // Aquí puedes almacenar la ruta del archivo
}
