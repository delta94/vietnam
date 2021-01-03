import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class FinanceCompanies extends Component {
  constructor() {
    super();

    this.state = { companies: [], loading: false };

    this.getStockCompanies = this.getStockCompanies.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getStockCompanies();
  }

  async getStockCompanies() {
    this.setState({ loading: true });
    const companies = await apis.getStockCompanies();
    this.setState({ companies, loading: false });
  }

  renderTable(loading, companies) {
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading ? (
          <div className="table-responsive table-container">
            <table className="table">
              <caption className="text-white text-center bg-danger">
                Companies ({companies.length})
              </caption>
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Name</th>
                  <th>Group</th>
                  <th>Industry</th>
                  <th>Sub Sector</th>
                  <th>Basic P/E</th>
                  <th>Diluted P/E</th>
                  <th>P/B</th>
                  <th>P/S</th>
                </tr>
              </thead>
              <tbody>
                {companies.length
                  ? companies.map((company, index) => {
                      const {
                        symbol,
                        name,
                        group,
                        industry,
                        subsector,
                        basicPE,
                        dilutedPE,
                        PB,
                        PS
                      } = company;
                      return (
                        <tr key={index}>
                          <td>{symbol}</td>
                          <td>{name}</td>
                          <td>{group}</td>
                          <td>{industry}</td>
                          <td>{subsector}</td>
                          <td>{basicPE}</td>
                          <td>{dilutedPE}</td>
                          <td>{PB}</td>
                          <td>{PS}</td>
                        </tr>
                      );
                    })
                  : ''}
              </tbody>
            </table>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }

  render() {
    const { companies = [], loading = false } = this.state;
    console.log('loading', loading);
    console.log('companies', companies);
    return (
      <div id="FinanceCompanies">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>{this.renderTable(loading, companies)}</Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default FinanceCompanies;
