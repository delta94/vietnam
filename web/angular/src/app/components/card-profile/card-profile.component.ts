import { Component, OnInit } from '@angular/core';

import { ApisService } from '../../services';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent implements OnInit {
  public name: string = '';
  public year: number = 0;

  constructor(private apisService: ApisService) {}

  async ngOnInit(): Promise<void> {
    await this.getProfile();
  }

  public async getProfile(): Promise<void> {
    const user = await this.apisService.getProfile();
    const { name, joinInAt } = user;
    const d: Date = new Date(joinInAt);
    this.name = name;
    this.year = d.getFullYear();
  }
}
