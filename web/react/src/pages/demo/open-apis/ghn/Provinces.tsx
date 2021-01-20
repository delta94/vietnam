import React, { Component } from 'react';

import { apis } from '../../../../services';
import { Table } from '../../../../components';

interface IProvincesProps {}

interface IProvincesState {
  provinces: Array<any>;
  loading: boolean;
}

export default class Provinces extends Component<IProvincesProps, IProvincesState> {
  constructor(props: IProvincesProps) {
    super(props);

    this.state = { provinces: [], loading: true };

    this.getGHNProvinces = this.getGHNProvinces.bind(this);
  }

  async componentDidMount() {
    await this.getGHNProvinces();
  }

  async getGHNProvinces() {
    this.setState({ loading: true });
    const provinces = await apis.getGHNProvinces();
    this.setState({ provinces, loading: false });
  }

  render() {
    const { provinces, loading } = this.state;

    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Province ID', key: 'province_id' },
      { header: 'Code', key: 'code' }
    ];

    return (
      <div id="Provinces" className="container-fluid">
        <div className="text-center mb-3">
          <a href={`https://www.npmjs.com/package/giaohangnhanh`} rel="noreferrer" target="_blank">
            npm
          </a>
        </div>
        <Table
          loading={loading}
          caption={'GHN Provinces'}
          rows={provinces}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}
