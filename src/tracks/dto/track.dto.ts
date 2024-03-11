import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';

export class TrackDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Track id',
    format: 'uuid',
  })
  @IsUUID()
  id: string;

  @ApiProperty({ example: 'Chop Suey!' })
  @IsString()
  name: string;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Artist ID',
    format: 'uuid',
    nullable: true,
  })
  @IsUUID()
  artistId: string | null;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Album ID',
    format: 'uuid',
    nullable: true,
  })
  @IsUUID()
  albumId: string | null;

  @ApiProperty({ example: 262, description: 'Duration in seconds' })
  @IsInt()
  duration: number;
}
