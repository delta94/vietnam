'use strict';

import { dsUser } from '../data';

export default class UsersService {
  public async login(email: string): Promise<any> {
    return await dsUser.findOne({ email });
  }

  public async register(email: string, password: string): Promise<any> {
    return await dsUser.create({ email, password });
  }

  public async updatePassword(email: string, password: string): Promise<any> {
    return await dsUser.update({ email }, { password });
  }
}
