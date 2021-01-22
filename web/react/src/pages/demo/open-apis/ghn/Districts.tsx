import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../../services';
import { Table, NavPills } from '../../../../components';

interface IDistrictsProps {}

interface IDistrictsState {
  districts: Array<any>;
  loading: boolean;
}

class Districts extends Component<IDistrictsProps, IDistrictsState> {
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
        <NavPills group={'open-apis'}></NavPills>
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

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Districts);
