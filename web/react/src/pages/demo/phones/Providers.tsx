import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface IPhonesProvidersProps {
  themeBorder: string;
  themeTextColor: string;
  themePrimaryBackgroundColor: string;
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
    const { themeBorder = '', themeTextColor = '', themePrimaryBackgroundColor = '' } = this.props;

    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <div className={`table-responsive table-container rounded-lg border ${themeBorder}`}>
            <table className="table">
              <caption className={`${themePrimaryBackgroundColor} text-center text-white`}>
                Providers ({providers.length})
              </caption>
              <thead>
                <tr>
                  <th className={`${themeTextColor}`}>Name</th>
                  <th className={`${themeTextColor}`}>Prefixes</th>
                </tr>
              </thead>
              <tbody>
                {providers.length
                  ? providers.map((provider, index) => {
                      const { provider: _provider = '', prefixes = [] } = provider;
                      return (
                        <tr key={index}>
                          <td className={`${themeTextColor}`}>{_provider}</td>
                          <td className={`${themeTextColor}`}>{prefixes.join(' - ')}</td>
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
  const themeBorder = _.get(state, 'theme.border', '');
  const themeTextColor = _.get(state, 'theme.textColor', '');
  const themePrimaryBackgroundColor = _.get(state, 'theme.primaryBackgroundColor', '');
  return { themeBorder, themeTextColor, themePrimaryBackgroundColor };
};

export default connect(mapStateToProps)(PhonesProviders);
