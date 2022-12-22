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

    @ManyToOne(()=> Properties, (proper) => proper.schedules,{eager:true} )
    property :Properties

    @ManyToOne(()=> User,(user)=> user.schedules, {eager:true})
    user :User
}