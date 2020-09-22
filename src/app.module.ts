import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MerchantModule } from './merchant/merchant.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MerchantModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
