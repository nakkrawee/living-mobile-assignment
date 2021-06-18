import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/createStore.dto';
import { ApiOperation } from '@nestjs/swagger';

 
 
@Controller('stores')
export class StoresController {
   constructor(private readonly storesService: StoresService) {}
 
   @Post()
   @ApiOperation({ summary: 'Create store' })
   create(@Body() createStoreDto: CreateStoreDto) {
       return this.storesService.create(createStoreDto);
   }
 
   @Get()
   @ApiOperation({ summary: 'Find all store' })
   findAll() {
       return this.storesService.findAll();
   }
 
   @Get(':id')
   @ApiOperation({ summary: 'Find one store'})
   findOne(@Param('id') id: string){
       return this.storesService.findOne(id);
   }
 
   @Delete(':id')
   @ApiOperation({ summary: 'Delete store' })
   remove(@Param('id') id: string) {
       return this.storesService.remove(id);
   }
 
   @Post(':id')
   @ApiOperation({summary: 'Update store'})
   update(@Param('id') id: string,@Body() createStoreDto: CreateStoreDto){
       return this.storesService.update(id,createStoreDto)
   }
}
