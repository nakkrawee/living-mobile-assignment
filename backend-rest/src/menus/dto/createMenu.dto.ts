import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNotEmpty, IsString, Length } from 'class-validator';
 
 
export class CreateMenuDto {
   
   @IsNotEmpty()
   @ApiProperty()
   categoryId: string;

   @IsString()
   @Length(3,50)
   @IsNotEmpty()
   @ApiProperty()
   name: string;
 
   @IsAlpha()
   @ApiProperty()
   price: number;

}
