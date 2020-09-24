import { Merchant } from './merchant.entity';
import { EntityRepository, getManager, Repository } from 'typeorm';
import { ForbiddenException, Logger } from '@nestjs/common';
import { MerchantDto } from './merchant.dto';
import { Bid } from './bid.entity';

@EntityRepository(Merchant)
export class MerchantRepository extends Repository<Merchant> {

  async getOne(id: string) {
    const one = await this.findOne({ id });
    return one;
  }

  async getBids() {
    return await getManager()
      .getRepository(Bid)
      .find({});
  }

  async oneBidMerchant(bId, mId) {
    return await this.addBidToMerchant(bId, mId);
  }

  async createMerchant(merchant: MerchantDto) {
    const newMerchant = new Merchant();
    const bidSize = Math.floor(Math.random() * 90) + 1;
    let manager = [];

    for (let i = 1; i < bidSize; i++) {
      manager.push(
        await getManager()
          .getRepository(Bid)
          .findOne(i),
      );
    }  


    newMerchant.firstname = merchant.firstname;
    newMerchant.lastname = merchant.lastname;
    newMerchant.avatarurl = merchant.avatarUrl;
    newMerchant.email = merchant.email;
    newMerchant.phone = merchant.phone;
    newMerchant.haspremium = merchant.haspremium;
    newMerchant.bid = manager;
    return await this.save(newMerchant);
  }

  async editMerchant(merchant) {
    const foundMerchant = await this.findOne({ id: merchant.id });
    foundMerchant.firstname = merchant.firstname;
    foundMerchant.lastname = merchant.lastname;
    foundMerchant.avatarurl = merchant.avatarurl;
    foundMerchant.email = merchant.email;
    foundMerchant.phone = merchant.phone;
    foundMerchant.haspremium = merchant.haspremium;
    try {
      return this.save(foundMerchant);
    } catch (e) {
      throw new ForbiddenException('Unauthorized!');
    }
  }

  async getMerchantBid() {
    const merchants = await this.find({});
    return merchants.map(bid => bid.bid);
  }

  async addBidToMerchant(bidId, mercId) {
    const oneMerchant = await this.findOne({ id: mercId });
    const oneBid = await getManager()
      .getRepository(Bid)
      .findOne(bidId);
    // const bidToAdd =  await getManager().getRepository(Bid).findOne(toAdd);

    oneMerchant.bid.push(oneBid);
    oneMerchant.save();

    return { oneMerchant, oneBid };

  }
}
