import { Component, OnInit } from '@angular/core';

interface IPhoneNumber {
  number: string;
  primary: boolean;
}

@Component({
  selector: 'app-card-phone-numbers',
  templateUrl: './card-phone-numbers.component.html',
  styleUrls: ['./card-phone-numbers.component.scss']
})
export class CardPhoneNumbersComponent implements OnInit {
  public phoneNumbers: Array<IPhoneNumber> = [
    { number: '093 732 5466', primary: true },
    { number: '090 102 0304', primary: false }
  ];

  constructor() {}

  ngOnInit(): void {}
}
