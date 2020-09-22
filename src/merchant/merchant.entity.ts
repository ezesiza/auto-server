  
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

    @OneToMany(() => Bid, bid => bid.merchant)
    @JoinTable()
    bid: Bid;

    @Column({ nullable: true })
    bidId:string 
}

