import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({length:100})
  district: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({length:5 , nullable: true })
  number?: string;

  @Column({length:50})
  city: string;

  @Column({ length: 2 })
  state: string;
}
