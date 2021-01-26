import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-balance',
  templateUrl: './card-balance.component.html',
  styleUrls: ['./card-balance.component.scss']
})
export class CardBalanceComponent implements OnInit {
  public currency: string = '$';
  public amount: string = '0.00';

  constructor() {}

  ngOnInit(): void {}
}
