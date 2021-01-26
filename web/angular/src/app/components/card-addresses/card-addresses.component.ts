import { Component, OnInit } from '@angular/core';

interface IAddress {
  street: string;
  district: string;
  province: string;
  postalCode: string;
  primary: boolean;
}

@Component({
  selector: 'app-card-addresses',
  templateUrl: './card-addresses.component.html',
  styleUrls: ['./card-addresses.component.scss']
})
export class CardAddressesComponent implements OnInit {
  public addresses: Array<IAddress> = [
    {
      street: '83B Tran Quoc Toan',
      district: 'Quan Hoan Kiem',
      province: 'Hanoi',
      postalCode: '100000',
      primary: true
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
