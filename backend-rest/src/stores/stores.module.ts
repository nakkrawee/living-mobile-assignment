import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoreModel } from './store.model';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
 
@Module({
   imports: [SequelizeModule.forFeature([StoreModel])],
   exports: [SequelizeModule],
   providers: [StoresService],
   controllers: [StoresController],
})
export class StoresModule {}
