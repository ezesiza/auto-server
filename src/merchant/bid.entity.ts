import { BaseEntity, Column, Entity,JoinColumn,ManyToOne,OneToMany,OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

@ManyToOne(
  () => Merchant,
  merchant => merchant.bid,
)
  merchant: Merchant;
}
