import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  faCog,
  faUniversity,
  faSignOutAlt,
  faWallet,
  faMoneyBillWave,
  faListAlt
} from '@fortawesome/free-solid-svg-icons';

import { StorageService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public faCog: IconDefinition = faCog;
  public faSignOutAlt: IconDefinition = faSignOutAlt;
  public faWallet: IconDefinition = faWallet;
  public faMoneyBillWave: IconDefinition = faMoneyBillWave;
  public faListAlt: IconDefinition = faListAlt;
  public faUniversity: IconDefinition = faUniversity;

  public isAuthenticated: boolean = false;

  constructor(private router: Router, private storageService: StorageService) {}

  ngOnInit(): void {
    console.log();
    this.isAuthenticated = this.storageService.getCookie('isAuthenticated') === 'true';
    console.log(this.isAuthenticated);
  }

  public logOut(event: Event): void {
    event.preventDefault();
    this.isAuthenticated = false;
    this.storageService.setCookie('isAuthenticated', 'false');
    this.storageService.setCookie('token', '');
    this.router.navigateByUrl('/');
  }
}
