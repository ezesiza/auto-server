import { Injectable, NotFoundException } from '@nestjs/common';

import { MerchantRepository } from './merchant.repository';
import { InjectRepository } from '@nestjs/typeorm';
import {  Merchant } from './merchant.entity';
import { MerchantDto } from './merchant.dto';


@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(MerchantRepository)
    private merchantRepository: MerchantRepository,
  ) {}

  async createMerchant( merchant:MerchantDto){
    return this.merchantRepository.createMerchant(merchant);
  }

  async getOne(id:string){
    return this.merchantRepository.getOne(id)
  } 

  async getMerchants():Promise<Merchant[]>{
    const merchants = this.merchantRepository.find({})
      // return this.merchantRepository.getAllMerchants();
      // return  this.merchantRepository.find({ relations: ['bid'] })
      return merchants;
    }

    async editMerchant(merchant){
      return await this.merchantRepository.editMerchant(merchant)
    }

    async deleteMerchant(id:string){
      return await this.merchantRepository.delete(id)
    }

}
  