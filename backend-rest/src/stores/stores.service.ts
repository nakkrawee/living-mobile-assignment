import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { StoreModel } from './store.model';
import { CreateStoreDto } from './dto/createStore.dto';
 
 
@Injectable()
export class StoresService {
   constructor(
       @InjectModel(StoreModel)
       private storeRepo: typeof StoreModel,
   ){}
 
   create(store: CreateStoreDto) {
       return this.storeRepo.create(store);
   }
 
   findAll() {
       return this.storeRepo.findAll();
   }
 
 
   findOne(id: string): Promise<StoreModel>{
       return this.storeRepo.findOne({where:{id:id}})
   }
 
   async remove(id: string): Promise<void> {
       await this.storeRepo.destroy({
           where:{id:id}
       });
   }
 
   async update(id: string,store: CreateStoreDto){
       await this.storeRepo.update(store,{where: {id:id}})
   }
 
  
 }
