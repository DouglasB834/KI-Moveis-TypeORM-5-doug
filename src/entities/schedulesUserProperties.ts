import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Properties } from "./createProperties.entity";
import { User } from "./createuser.entity";

@Entity("schedulesUserProperties")
export class  SchedulesUserProperties {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "date"})
    date : string
    @Column({type: "time"})
    hour : string

    @ManyToOne(()=> Properties, (proper) => proper.schedulesUserProperties )
    property :Properties

    @ManyToOne(()=> User,(user)=> user.schedulesUserProperties, {eager:true})
    user :User
}