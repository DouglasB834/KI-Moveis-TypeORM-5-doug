import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Addresses {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  district: string;

  @Column()
  zipCode: string;

  @Column({nullable:true})//pode ser null
  number?: string;

  @Column()
  city: string;

  @Column()
  state: string;
}
