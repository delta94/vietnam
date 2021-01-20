import React, { Component } from 'react';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IMapsPostalCodesProps {}

interface IMapsPostalCodesState {
  postalCodes: Array<any>;
  loading: boolean;
}

export default class MapsPostalCodes extends Component<
  IMapsPostalCodesProps,
  IMapsPostalCodesState
> {
  constructor(props: IMapsPostalCodesProps) {
    super(props);

    this.state = { postalCodes: [], loading: true };

    this.getPostalCodes = this.getPostalCodes.bind(this);
  }

  async componentDidMount() {
    await this.getPostalCodes();
  }

  async getPostalCodes() {
    await this.setState({ loading: true });
    const postalCodes = await apis.getPostalCodes();
    await this.setState({ postalCodes, loading: false });
  }

  render() {
    const { postalCodes = [], loading = true } = this.state;
    const rowConfigs = [
      { header: 'Code', key: 'code' },
      { header: 'Province', key: 'province' }
    ];
    return (
      <div id="MapsPostalCodes" className="container-fluid">
        <Table
          loading={loading}
          caption={'Postal Codes'}
          rows={postalCodes}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}
