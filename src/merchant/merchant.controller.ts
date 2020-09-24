import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MerchantDto } from './merchant.dto';
import { MerchantService } from './merchant.service';

@Controller('merchant')
export class MerchantController {
  constructor(private merchantService: MerchantService) {}
  //get all merchants
  @Get('/')
  getMerchants() 
  {
    return this.merchantService.getMerchants();
  }

  //get merchant by id
  @Get('/:id')
  getOne(@Param('id') id) 
  {
    return this.merchantService.getOne(id);
  }

  //create merchant
  @Post('create')
  async createMerchant(@Body() merchant: MerchantDto) {
    return this.merchantService.createMerchant(merchant);
  }

  //edit merchant
  @Put('/edit')
  async editMerchant(
    @Body() merchant){
    const newMerchant = await this.merchantService.editMerchant( merchant)
    return newMerchant;
  } 

  //delete merhant
  @Delete('/:id')
  async deleteMerchant( @Param('id') id ){
    return await this.merchantService.deleteMerchant(id)
  }

  // get all bids
  @Get('/bids/bid')
  getAllBids(){
   return this.merchantService.getAllBids()
  }

  //add bid to a merchant 
  //@ example localhost:3000/merchant/96/223
  @Post('/:bId/:mId')
  async getOneBidMerchant(@Param('bId') bId ,@Param('mId') mId){
    return await this.merchantService.oneBidMerchant(bId, mId)
  }

}
 