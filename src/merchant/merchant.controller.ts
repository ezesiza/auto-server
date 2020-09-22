import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MerchantDto } from './merchant.dto';
import { Merchant } from './merchant.entity';
import { MerchantService } from './merchant.service';

@Controller('merchant')
export class MerchantController {
  constructor(private merchantService: MerchantService) {}
  @Get('/')
  getMerchants() // : Promise<Merchant[]>
  {
    return this.merchantService.getMerchants();
  }
  @Get('/:id')
  getOne(@Param('id') id) // : Promise<Merchant[]>
  {
    return this.merchantService.getOne(id);
  }



  @Post('create')
  async createMerchant(@Body() merchant: MerchantDto) {
    return this.merchantService.createMerchant(merchant);
  }

  @Put('/edit')
  async editMerchant(
    @Body() merchant){
      console.log( merchant)
    const newMerchant = await this.merchantService.editMerchant( merchant)
    return newMerchant;
  } 

  @Delete('/:id')
  async deleteMerchant( @Param('id') id ){
    return this.merchantService.deleteMerchant(id)
  }
}
