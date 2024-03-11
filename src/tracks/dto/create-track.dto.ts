import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateTrackDto {
  @ApiProperty({ example: 'Chop Suey!' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Artist ID',
    format: 'uuid',
  })
  @IsOptional()
  @IsUUID()
  artistId: string;

  @ApiPropertyOptional({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Album ID',
    format: 'uuid',
  })
  @IsOptional()
  @IsUUID()
  albumId: string;

  @ApiProperty({ example: 262, description: 'Duration in seconds' })
  @IsNotEmpty()
  @IsInt()
  duration: number;
}
