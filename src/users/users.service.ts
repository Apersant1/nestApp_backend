import { Injectable } from '@nestjs/common';
import { users } from '../moks';
@Injectable()
export class UsersService {
  getAllUsers() {
    return users;
  }
}
