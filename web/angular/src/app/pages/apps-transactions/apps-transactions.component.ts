import { Component, OnInit } from '@angular/core';

interface ITransaction {
  dateTime: string;
  description: string;
  status: string;
  amount: string;
  code: string;
}

@Component({
  selector: 'app-apps-transactions',
  templateUrl: './apps-transactions.component.html',
  styleUrls: ['./apps-transactions.component.scss']
})
export class AppsTransactionsComponent implements OnInit {
  public transactions: Array<ITransaction> = [];

  constructor() {}

  ngOnInit(): void {}

  public search(event: Event): void {
    event.preventDefault();
  }
}
