  
import {PrimaryGeneratedColumn, BaseEntity, Column, Entity, OneToOne, JoinColumn, OneToMany, JoinTable } from "typeorm"
import { Bid } from "./bid.entity";



@Entity("merchant")
export class Merchant extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    avatarurl: string;

    @Column()
    email: string;
    

    @Column()
    phone: string;

    @Column()
    haspremium: string;

    @OneToMany(type => Bid, bid => bid.merchant,
        {onDelete:'CASCADE', onUpdate:'CASCADE', eager:true})
    bid: Bid[];
}

