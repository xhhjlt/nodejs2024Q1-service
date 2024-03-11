import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString, IsUUID } from 'class-validator';

export class ArtistDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Artist id',
    format: 'uuid',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Name of the artist',
    example: 'System of a Down',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Grammy award for the artist',
    example: true,
  })
  @IsBoolean()
  grammy: boolean;
}
