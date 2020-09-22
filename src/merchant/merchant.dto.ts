import { Bid } from "./bid.entity";

export class MerchantDto {
  firstname: string;

  lastname: string;

  email: string;

  phone: string;

  avatarUrl: string;

  haspremium: string;

  bidId:string;
  bid:Bid;

}