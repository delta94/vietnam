import React, { Component } from 'react';

import { apis } from '../../../../services';
import { Table } from '../../../../components';

interface IDistrictsProps {}

interface IDistrictsState {
  districts: Array<any>;
  loading: boolean;
}

export default class Districts extends Component<IDistrictsProps, IDistrictsState> {
  constructor(props: IDistrictsProps) {
    super(props);

    this.state = { districts: [], loading: true };

    this.getGHNDistricts = this.getGHNDistricts.bind(this);
  }

  async componentDidMount() {
    await this.getGHNDistricts();
  }

  async getGHNDistricts() {
    this.setState({ loading: true });
    const districts = await apis.getGHNDistricts();
    this.setState({ districts, loading: false });
  }

  render() {
    const { districts, loading } = this.state;

    const rowConfigs = [
      { header: 'Province ID', key: 'province_id' },
      { header: 'District ID', key: 'district_id' },
      { header: 'Name', key: 'name' },
      { header: 'Code', key: 'code' },
      { header: 'Type', key: 'type' },
      { header: 'Support Type', key: 'support_type' }
    ];

    return (
      <div id="Districts" className="container-fluid">
        <div className="text-center mb-3">
          <a href={`https://www.npmjs.com/package/giaohangnhanh`} rel="noreferrer" target="_blank">
            npm
          </a>
        </div>
        <Table
          loading={loading}
          caption={'GHN Districts'}
          rows={districts}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}
