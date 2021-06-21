import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CategorysService } from './categorys.service';
import { CreateCategoryDto } from './dto/createCategory.dto';

@Controller('categorys')
export class CategorysController {
    constructor(private readonly categoryService: CategorysService) {}

    @Post()
    @ApiOperation({ summary: 'Create category' })
    create(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }

    @Get()
    @ApiOperation({ summary: 'Find all category' })
    findAll() {
        return this.categoryService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Find one category' })
    findOne(@Param('id') id: string){
        return this.categoryService.findOne(id);
    }


    @Delete(':id')
    @ApiOperation({ summary: 'Delete category' })
    remove(@Param('id') id: string) {
        return this.categoryService.remove(id);
    }

    @Post(':id')
    @ApiOperation({summary: 'Update category'})
    update(@Param('id') id: string,@Body() createCategoryDto: CreateCategoryDto){
        return this.categoryService.update(id,createCategoryDto)
    }
}
