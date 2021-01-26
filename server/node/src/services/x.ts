'use strict';

import * as _ from 'lodash';
import * as uuid from 'uuid';

import { dsUser } from '../data';
import { bcrypt, jwt } from '../libs';

export default class XService {
  public async signUp(email: string, phoneNumer: string, password: string): Promise<any> {
    const hashPassword: string = await bcrypt.hash(password);
    const joinInAt: number = Date.now();
    const balance: number = 0;
    const currencyCode: string = 'VND';
    const username: string = uuid.v4();
    console.log({
      primaryEmail: email,
      primaryPhoneNumber: phoneNumer,
      username,
      password: hashPassword,
      joinInAt
    });
    try {
      const user = await dsUser.create({
        primaryEmail: email,
        primaryPhoneNumber: phoneNumer,
        username,
        password: hashPassword,
        joinInAt,
        balance,
        currencyCode,
        emails: [],
        phoneNumbers: [],
        addresses: []
      });
      console.log('signUp() User', user);
      const token: string = jwt.sign({ primaryEmail: email });
      return { token, errorMessage: '' };
    } catch (error) {
      console.error('signUp()', error.stack);
      return { token: '', errorMessage: error.stack };
    }
  }

  public async signIn(username: string, password: string): Promise<any> {
    const user = await dsUser.findOne(
      { $or: [{ primaryEmail: username }, { primaryPhoneNumber: username }, { username }] },
      { excludedFields: ['_id'] }
    );
    console.log(user);
    if (!user || _.isEmpty(user)) {
      return { token: '', errorMessage: 'Invalid Username or Password' };
    }
    const { primaryEmail = '', password: hashPassword = '' } = user;
    const valid: boolean = await bcrypt.compare(password, hashPassword);
    if (!valid) {
      return { token: '', errorMessage: 'Invalid Username or Password' };
    }
    const token: string = jwt.sign({ primaryEmail });
    return { token, errorMessage: '' };
  }
}
