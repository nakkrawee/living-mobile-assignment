import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateCategoryDto {

    @IsNotEmpty()
    @IsString()
    @Length(3,50)
    @ApiProperty()
    name: string;

    @IsNotEmpty()
    @ApiProperty()
    storeId: string;
}

