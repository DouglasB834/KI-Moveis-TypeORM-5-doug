import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./createProperties.entity";


@Entity("categories")
export class Categories {
    
@PrimaryGeneratedColumn("uuid")
id: string;

@Column({unique:true})
name: string

@OneToMany(()=> Properties, (proper) =>  proper.category) 
properties: Properties[]
}
