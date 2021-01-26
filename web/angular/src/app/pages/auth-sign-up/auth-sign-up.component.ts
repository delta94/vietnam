import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApisService, StorageService } from '../../services';

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.scss']
})
export class AuthSignUpComponent implements OnInit {
  public email: string = '';
  public phoneNumber: string = '';
  public password: string = '';
  public confirmPassword: string = '';

  constructor(
    private router: Router,
    private apisService: ApisService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  public async signUp(event: Event): Promise<void> {
    event.preventDefault();
    const { email, phoneNumber, password, confirmPassword } = this;
    if (password !== confirmPassword) {
      alert('Passwords is not matched');
      return;
    }

    const { token, errorMessage } = await this.apisService.signUp(email, phoneNumber, password);
    if (token) {
      this.storageService.setCookie('isAuthenticated', 'true');
      this.storageService.setCookie('token', token);
      this.router.navigateByUrl('/summary');
    } else if (errorMessage) {
      alert(errorMessage);
    }
  }
}
