import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface IPhonesProvidersProps {
  theme: string;
}

interface IPhonesProvidersState {
  providers: Array<any>;
  loading: boolean;
}

class PhonesProviders extends Component<IPhonesProvidersProps, IPhonesProvidersState> {
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

  renderTable() {
    const { providers = [], loading = true } = this.state;
    const { theme } = this.props;
    const bgColor: string = theme === 'light' ? 'bg-danger' : 'bg-black';
    const borderColor: string = theme === 'light' ? '' : 'border-white';
    const textColor: string = theme === 'light' ? 'text-dark' : 'text-white';
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <div className={`table-responsive table-container rounded-lg border ${borderColor}`}>
            <table className="table">
              <caption className={`${bgColor} text-center text-white`}>
                Providers ({providers.length})
              </caption>
              <thead>
                <tr>
                  <th className={`${textColor}`}>Name</th>
                  <th className={`${textColor}`}>Prefixes</th>
                </tr>
              </thead>
              <tbody>
                {providers.length
                  ? providers.map((provider, index) => {
                      const { provider: _provider = '', prefixes = [] } = provider;
                      return (
                        <tr key={index}>
                          <td className={`${textColor}`}>{_provider}</td>
                          <td className={`${textColor}`}>{prefixes.join(' - ')}</td>
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
    return (
      <div id="PhonesProviders" className="container-fluid">
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { theme } = state;
  return { theme };
};

export default connect(mapStateToProps)(PhonesProviders);
