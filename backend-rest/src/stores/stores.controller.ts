import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/createStore.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { ApiBadRequestResponse } from '@nestjs/swagger';
import { UsePipes } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
 
 
@Controller('stores')
export class StoresController {
   constructor(private readonly storesService: StoresService) {}
 
    @Post()
    @ApiOperation({ summary: 'Create store' })
    @ApiCreatedResponse({ 
        description: 'The store has been successfully created.',
        type: CreateStoreDto,
        })
    create(@Body() createStoreDto: CreateStoreDto) {
        return this.storesService.create(createStoreDto);
    }
    
    @Get()
    @ApiOperation({ summary: 'Find all store' })
    @ApiOkResponse({ 
            description: 'All of store',
            isArray: true,
            type: CreateStoreDto,
        })
    findAll() {
        return this.storesService.findAll();
    }
    
    
    @Get(':id')
    @ApiOperation({ summary: 'Find one store'})
    @ApiOkResponse({ 
        description: 'Find store by id',
        isArray: true,
        type: CreateStoreDto,
        })
    findOne(@Param('id') id: string){
        return this.storesService.findOne(id);
    }
    
    @Delete(':id')
    @ApiOperation({ summary: 'Delete store' })
    @ApiOkResponse({ 
        description: 'The store has been successfully deleted',
        isArray: true,
        type: CreateStoreDto,
    })
    remove(@Param('id') id: string) {
        return this.storesService.remove(id);
    }
    
    @Put(':id')
    @ApiOperation({summary: 'Update store'})
    @ApiOkResponse({ 
        description: 'Update store by id',
        isArray: true,
        type: CreateStoreDto,
        })
    update(@Param('id') id: string,@Body() createStoreDto: CreateStoreDto){
        return this.storesService.update(id,createStoreDto)
    }
}
