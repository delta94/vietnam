import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../services';
import { NavPills, Table } from '../../../components';

interface IProvidersProps {
  themeBorder: string;
  themeTextColor: string;
  themePrimaryBackgroundColor: string;
}

interface IProvidersState {
  providers: Array<any>;
  loading: boolean;
}

class Providers extends Component<IProvidersProps, IProvidersState> {
  constructor(props: IProvidersProps) {
    super(props);

    this.state = { providers: [], loading: true };

    this.getProviders = this.getProviders.bind(this);
  }

  async componentDidMount() {
    await this.getProviders();
  }

  async getProviders() {
    this.setState({ loading: true });

    const providers = await apis.getProviders();

    this.setState({ providers, loading: false });
  }

  render() {
    const { providers = [], loading = true } = this.state;
    const rowConfigs = [
      {
        header: 'Provider',
        key: 'provider'
      },
      {
        header: 'Prefixes',
        key: 'prefixes',
        type: 'list'
      }
    ];
    return (
      <div id="Providers" className="container-fluid">
        <NavPills group={'phones'}></NavPills>
        <Table
          caption={'Providers'}
          rows={providers}
          loading={loading}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeBorder: string = _.get(state, 'theme.border', '');
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  const themePrimaryBackgroundColor: string = _.get(state, 'theme.primaryBackgroundColor', '');
  return { themeBorder, themeTextColor, themePrimaryBackgroundColor };
};

export default connect(mapStateToProps)(Providers);
