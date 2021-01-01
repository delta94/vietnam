'use strict';

import Address from './services/address';
import Order from './services/order';
import Store from './services/store';
import Ticket from './services/ticket';

interface IOptions {
  token: string;
  dev?: boolean;
}

export default class GHN {
  private prod: string = 'https://online-gateway.ghn.vn';
  private dev: string = 'https://dev-online-gateway.ghn.vn';

  public address: Address;
  public order: Order;
  public store: Store;
  public ticket: Ticket;

  constructor(options: IOptions) {
    const { token, dev = false } = options;
    const base = dev ? this.prod : this.dev;

    this.address = new Address(token, base);
    this.order = new Order(token, base);
    this.store = new Store(token, base);
    this.ticket = new Ticket(token, base);
  }
}
