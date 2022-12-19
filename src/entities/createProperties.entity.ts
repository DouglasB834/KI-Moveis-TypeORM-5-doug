import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Addresses } from "./createAdresses.entity";

@Entity()
export class properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column("decimal")
  value: number

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeUpdate()
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Addresses)@JoinColumn()
  address: Addresses;
}
