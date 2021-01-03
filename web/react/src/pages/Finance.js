import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import {
  FinanceCompanies,
  FinanceHighlights,
  FinanceHistory,
  FinancePotentials,
  FinanceProfit
} from '../components';

class Finance extends Component {
  render() {
    return (
      <div id="Finance">
        <main className="container mt-3">
          <Tabs defaultActiveKey="companies" className="nav-justified">
            <Tab eventKey="companies" title="Companies">
              <FinanceCompanies></FinanceCompanies>
            </Tab>
            <Tab eventKey="highlights" title="Highlights">
              <FinanceHighlights></FinanceHighlights>
            </Tab>
            <Tab eventKey="history" title="History">
              <FinanceHistory></FinanceHistory>
            </Tab>
            <Tab eventKey="potentials" title="Potentials">
              <FinancePotentials></FinancePotentials>
            </Tab>
            <Tab eventKey="profit" title="Profit">
              <FinanceProfit></FinanceProfit>
            </Tab>
          </Tabs>
        </main>
      </div>
    );
  }
}

export default Finance;
