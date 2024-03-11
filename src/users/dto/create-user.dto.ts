import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'TEST_LOGIN', description: 'User login' })
  @IsNotEmpty()
  @IsString()
  login: string;

  @ApiProperty({ example: 'TEST_PASSWORD', description: 'User password' })
  @IsNotEmpty()
  @IsString()
  password: string;
}
