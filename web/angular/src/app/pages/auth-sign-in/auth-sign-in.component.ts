import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApisService, StorageService } from '../../services';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss']
})
export class AuthSignInComponent implements OnInit {
  public username: string = '';
  public password: string = '';

  constructor(
    private router: Router,
    private apisService: ApisService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  public async signIn(event: Event): Promise<void> {
    event.preventDefault();
    const { username, password } = this;
    const { token, errorMessage } = await this.apisService.signIn(username, password);
    if (token) {
      this.storageService.setCookie('isAuthenticated', 'true');
      this.storageService.setCookie('token', token);
      this.router.navigateByUrl('/summary');
    } else if (errorMessage) {
      alert(errorMessage);
    }
  }
}
