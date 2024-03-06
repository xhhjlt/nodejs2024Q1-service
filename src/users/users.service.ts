import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  updatePassword(id: string, updatePasswordDto: UpdatePasswordDto) {
    return `This action updates a #${id} user password`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
