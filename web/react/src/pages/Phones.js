import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../services';

class Phones extends Component {
  constructor() {
    super();

    this.state = { providers: [], loading: true };

    this.getPhonesProviders = this.getPhonesProviders.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getPhonesProviders();
  }

  async getPhonesProviders() {
    this.setState({ loading: true });

    const providers = await apis.getPhonesProviders();

    this.setState({ providers, loading: false });
  }

  renderTable(loading, providers) {
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <div className="table-responsive table-container">
            <table className="table">
              <caption className="bg-danger text-center text-white">
                Providers ({providers.length})
              </caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Prefixes</th>
                </tr>
              </thead>
              <tbody>
                {providers.length
                  ? providers.map((provider, index) => {
                      const { name = '', prefixes = [] } = provider;
                      return (
                        <tr key={index}>
                          <td>{name}</td>
                          <td>{prefixes.join(' - ')}</td>
                        </tr>
                      );
                    })
                  : ''}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }

  render() {
    const { providers = [], loading = true } = this.state;

    return (
      <div id="Phones">
        <main className="container mt-3">
          <div className="mt-3 w-100">
            <Card className="shadow">
              <Card.Body>{this.renderTable(loading, providers)}</Card.Body>
            </Card>
          </div>
        </main>
      </div>
    );
  }
}

export default Phones;
