import { hashSync, getRounds } from "bcryptjs";
import { scheduler } from "timers/promises";

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
} from "typeorm";
import { SchedulesUserProperties } from "./schedulesUserProperties";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 }) // ja e padrão not null
  name: string;

  @Column({ length: 200, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
  // hashPassword() {
  //   const isHash = getRounds(this.password)
  //   if(!isHash){
  //     this.password = hashSync(this.password, 10);
  //   }
  // }

  @Column()
  isAdm: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;


  @OneToMany(() =>SchedulesUserProperties, (userToProper) => userToProper.user)
  schedulesUserProperties:SchedulesUserProperties[]
}
