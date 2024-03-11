import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, IsUUID } from 'class-validator';

export class UserDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'User id',
    format: 'uuid',
  })
  @IsUUID()
  id: string;

  @ApiProperty({ example: 'TEST_LOGIN', description: 'User login' })
  @IsString()
  login: string;

  @ApiProperty({ example: '3', description: 'User version' })
  @IsInt()
  version: number;

  @ApiProperty({
    example: '1655649600',
    description: 'Timestamp of creation',
  })
  @IsInt()
  createdAt: number;

  @ApiProperty({
    example: '1655649600',
    description: 'Timestamp of last update',
  })
  @IsInt()
  updatedAt: number;
}
