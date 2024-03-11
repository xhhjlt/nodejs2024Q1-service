import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateAlbumDto {
  @ApiProperty({
    example: 'Toxicity',
    description: 'Album name',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 2021, description: 'Album year' })
  @IsNotEmpty()
  @IsInt()
  year: number;

  @ApiPropertyOptional({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Album artist id',
    format: 'uuid',
  })
  @IsOptional()
  @IsUUID()
  artistId: string;
}
