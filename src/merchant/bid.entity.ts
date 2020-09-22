import { BaseEntity, Column, Entity,JoinColumn,OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Merchant } from "./merchant.entity";

@Entity("bid")
export class Bid extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cartitle: string;

  @Column()
  amount: string;

  @Column()
  created: string;

@OneToOne(
  type => Merchant,
  merchant => merchant.id,
{ eager: false, cascade:true })
  merchant: Merchant;

  
}