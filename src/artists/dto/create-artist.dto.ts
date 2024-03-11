import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateArtistDto {
  @ApiProperty({
    description: 'Name of the artist',
    example: 'System of a Down',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Grammy award for the artist',
    example: true,
  })
  @IsNotEmpty()
  @IsBoolean()
  grammy: boolean;
}
