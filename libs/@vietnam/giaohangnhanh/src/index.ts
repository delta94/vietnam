'use strict';

import Address from './services/address';
import Order from './services/order';
import Service from './services/service';
import Store from './services/store';
import Ticket from './services/ticket';

import { IOptions } from './helper/constants';

export default class GHN {
  public address: Address;
  public order: Order;
  public service: Service;
  public store: Store;
  public ticket: Ticket;

  constructor(token: string, test: boolean = false) {
    this.address = new Address(token, test);
    this.order = new Order(token, test);
    this.service = new Service(token, test);
    this.store = new Store(token, test);
    this.ticket = new Ticket(token, test);
  }
}
