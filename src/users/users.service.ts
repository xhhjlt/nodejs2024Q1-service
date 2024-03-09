import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(private readonly dbService: DbService) {}

  create(createUserDto: CreateUserDto) {
    const id = this.dbService.generateID();
    const user = {
      id,
      version: 1,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ...createUserDto,
    };
    this.dbService.users.push(user);
    return user;
  }

  findAll() {
    const users = this.dbService.users;
    return users;
  }

  findOne(id: string) {
    const user = this.dbService.users.find((user) => user.id === id);
    return user;
  }

  updatePassword(id: string, updatePasswordDto: UpdatePasswordDto) {
    const user = this.dbService.users.find((user) => user.id === id);
    user.password = updatePasswordDto.newPassword;
    user.updatedAt = Date.now();
    return user;
  }

  remove(id: string) {
    const index = this.dbService.users.findIndex((user) => user.id === id);
    const [user] = this.dbService.users.splice(index, 1);
    return user;
  }
}
