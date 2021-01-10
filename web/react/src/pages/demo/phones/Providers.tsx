import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface IPhonesProvidersProps {}

interface IPhonesProvidersState {
  providers: Array<any>;
  loading: boolean;
}

export default class PhonesProviders extends Component<
  IPhonesProvidersProps,
  IPhonesProvidersState
> {
  constructor(props: IPhonesProvidersProps) {
    super(props);

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

  renderTable(loading: boolean, providers: Array<any> = []) {
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
                      const { provider: _provider = '', prefixes = [] } = provider;
                      return (
                        <tr key={index}>
                          <td>{_provider}</td>
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
      <div id="PhonesProviders" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>{this.renderTable(loading, providers)}</Card.Body>
        </Card>
      </div>
    );
  }
}
