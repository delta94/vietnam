import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { baseAPI } from '../configs';

class FinanceCompanies extends Component {
  constructor() {
    super();
    this.state = { companies: [], loading: false };
    this.getStockCompanies = this.getStockCompanies.bind(this);
  }

  async componentDidMount() {
    await this.getStockCompanies();
  }

  async getStockCompanies() {
    const self = this;
    self.setState({ loading: true });
    const url = `${baseAPI}/stock/companies`;

    fetch(url)
      .then(res => res.json())
      .then((companies = []) => {
        companies.sort((a, b) => (a.symbol > b.symbol ? 1 : -1));
        self.setState({ companies, loading: false });
      })
      .catch(error => {
        console.error(error);
        self.setState({ companies: [], loading: false });
      });
  }

  render() {
    const { companies = [], loading = false } = this.state;
    console.log('loading', loading);
    console.log('companies', companies);
    return (
      <div id="FinanceCompanies">
        <div className="mt-3 w-100">
          <Card>
            <Card.Body>
              <Card.Title className="text-center">Companies ({companies.length})</Card.Title>
              {loading && (
                <div className="text-center">
                  <Spinner animation="border" variant="danger"></Spinner>
                </div>
              )}
              {!loading ? (
                <div className="table-responsive table-container">
                  <table className="table">
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
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default FinanceCompanies;
