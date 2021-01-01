import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import { BanksForex, BanksHistory, BanksList } from '../components';

class Banks extends Component {
  render() {
    return (
      <div id="Banks">
        <main className="container mt-3">
          <Tabs defaultActiveKey="forex" className="nav-justified">
            <Tab eventKey="forex" title="Forex">
              <BanksForex></BanksForex>
            </Tab>
            <Tab eventKey="history" title="History">
              <BanksHistory></BanksHistory>
            </Tab>
            <Tab eventKey="list" title="List">
              <BanksList></BanksList>
            </Tab>
          </Tabs>
        </main>
      </div>
    );
  }
}

export default Banks;
