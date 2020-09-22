import { Merchant } from './merchant.entity';
import { EntityRepository, Repository } from 'typeorm';
import { ForbiddenException, Logger } from '@nestjs/common';
import { MerchantDto } from './merchant.dto';

@EntityRepository(Merchant)
export class MerchantRepository extends Repository<Merchant> {
  private logger = new Logger('MerchantRepository');

  async getAllMerchants() {
    const query = this.createQueryBuilder('merchant')
    .innerJoinAndSelect("merchant.bid", "bid")
      .getMany();
    return query;
  }

  async getOne(id:string){
    const one = await this.findOne({id});
    // console.log('one',sone)
    return one;
  }

  async createMerchant(merchant: MerchantDto) {
    const newMerchant = new Merchant();
    newMerchant.firstname = merchant.firstname;
    newMerchant.lastname = merchant.lastname;
    newMerchant.avatarurl = merchant.avatarUrl;
    newMerchant.email = merchant.email;
    newMerchant.phone = merchant.phone;
    newMerchant.haspremium = merchant.haspremium;
    newMerchant.bidId = merchant.bidId;
    newMerchant.bid = merchant.bid;

    return newMerchant.save();
  }

  async editMerchant(merchant){
    // const once = await this.getOne(id)

    const foundMerchant = await this.findOne({id:merchant.id});
    // console.log('foundMerchant',foundMerchant)
    // console.log('merchant-dise', foundMerchant)
    
    foundMerchant.firstname = merchant.firstname;
    foundMerchant.lastname = merchant.lastname;
    foundMerchant.avatarurl = merchant.avatarUrl;
    foundMerchant.email = merchant.email;
    foundMerchant.phone = merchant.phone;
    foundMerchant.haspremium = merchant.haspremium;
    foundMerchant.bidId = merchant.bidId;
    foundMerchant.bid = merchant.bid;

    // let updated;
    // if (merchant.bidId === foundMerchant.bidId) {
    //   console.log(foundMerchant); 
      try {
        return this.save(foundMerchant);
      } catch (e) {
        throw new ForbiddenException("Unauthorized!");
      }
    // } 
    // else { 
    //   console.log('updated',updated)
    //   return updated;
    // }
  }
}
