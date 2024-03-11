import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';

export class AlbumDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Album id',
    format: 'uuid',
  })
  @IsUUID()
  id: string;

  @ApiProperty({
    example: 'Toxicity',
    description: 'Album name',
  })
  @IsString()
  name: string;

  @ApiProperty({ example: 2021, description: 'Album year' })
  @IsInt()
  year: number;

  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'Album artist id',
    format: 'uuid',
    nullable: true,
  })
  @IsUUID()
  artistId: string | null;
}
