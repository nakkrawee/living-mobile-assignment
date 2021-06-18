import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MenusService } from './menus.service';
import { CreateMenuDto } from './dto/createMenu.dto';
import { ApiOperation } from '@nestjs/swagger';

 
 
@Controller('menus')
export class MenusController {
   constructor(private readonly menusService: MenusService) {}
 
   @Post()
   @ApiOperation({ summary: 'Create menu' })
   create(@Body() createMenuDto: CreateMenuDto) {
       return this.menusService.create(createMenuDto);
   }
 
   @Get()
   @ApiOperation({ summary: 'Find all menu' })
   findAll() {
       return this.menusService.findAll();
   }
 
   @Get(':id')
   @ApiOperation({ summary: 'Find one menu'})
   findOne(@Param('id') id: string){
       return this.menusService.findOne(id);
   }
 
   @Delete(':id')
   @ApiOperation({ summary: 'Delete menu' })
   remove(@Param('id') id: string) {
       return this.menusService.remove(id);
   }
 
   @Post(':id')
   @ApiOperation({summary: 'Update menu'})
   update(@Param('id') id: string,@Body() createMenuDto: CreateMenuDto){
       return this.menusService.update(id,createMenuDto)
   }
}
