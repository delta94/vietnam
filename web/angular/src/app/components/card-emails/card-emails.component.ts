import { Component, OnInit } from '@angular/core';

interface IEmail {
  email: string;
  primary: boolean;
}

@Component({
  selector: 'app-card-emails',
  templateUrl: './card-emails.component.html',
  styleUrls: ['./card-emails.component.scss']
})
export class CardEmailsComponent implements OnInit {
  public emails: Array<IEmail> = [
    { email: 'hieumdoan@gmail.com', primary: true },
    { email: 'test@example.com', primary: false }
  ];

  constructor() {}

  ngOnInit(): void {}
}
