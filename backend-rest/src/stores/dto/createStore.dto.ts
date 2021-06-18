import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsNotEmpty, IsString, Length } from 'class-validator';
 
 
export class CreateStoreDto {
   @IsString()
   @Length(3,50)
   @IsNotEmpty()
   @ApiProperty()
   name: string;
 
   @IsString()
   @Length(3,50)
   @ApiProperty()
   description: string;
 
   @IsAlpha()
   @ApiProperty()
   rating: number;
}
