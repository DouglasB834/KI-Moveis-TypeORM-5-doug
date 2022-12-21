import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Addresses } from "./createAdresses.entity";
import { Categories } from "./createCategories.entity";
import { SchedulesUserProperties } from "./schedulesUserProperties";

@Entity()
export class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({type:"decimal", precision:12, scale: 2})
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

  @ManyToOne(()=> Categories, (categorie) => categorie.properties)
  category:Categories

  @OneToMany(() => SchedulesUserProperties, (userToProper) => userToProper.property )
  schedulesUserProperties:SchedulesUserProperties[]

}
