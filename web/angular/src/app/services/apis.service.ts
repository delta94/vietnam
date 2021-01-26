import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  private base: string = environment.baseAPI;

  constructor(private httpService: HttpService, private storageService: StorageService) {}

  public async signIn(username: string, password: string): Promise<any> {
    const { base } = this;
    const body = { username, password };
    const url: string = `${base}/auth/sign-in`;
    return await this.httpService.post(url, body);
  }

  public async signUp(email: string, phoneNumber: string, password: string): Promise<any> {
    const { base } = this;
    const body = { email, phoneNumber, password };
    const url: string = `${base}/auth/sign-up`;
    return await this.httpService.post(url, body);
  }

  public async getProfile(): Promise<any> {
    const { base } = this;
    const token: string = this.storageService.getCookie('token');
    const url: string = `${base}/settings/profile`;
    return await this.httpService.get(url, token);
  }
}
