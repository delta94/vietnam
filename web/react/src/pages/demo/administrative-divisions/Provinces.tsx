import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../services';
import { Table, NavPills } from '../../../components';

interface IProvincesProps {}

interface IProvincesState {
  provinces: Array<any>;
  loading: boolean;
}

class Provinces extends Component<IProvincesProps, IProvincesState> {
  constructor(props: IProvincesProps) {
    super(props);

    this.state = { provinces: [], loading: true };

    this.getProvinces = this.getProvinces.bind(this);
  }

  async componentDidMount() {
    await this.getProvinces();
  }

  async getProvinces() {
    this.setState({ loading: true });
    const provinces = await apis.getProvinces();
    this.setState({ provinces, loading: false });
  }

  render() {
    const { provinces, loading } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Capital', key: 'capital' },
      { header: 'Macro Region', key: 'macroRegion' },
      { header: 'Region', key: 'region' }
    ];
    return (
      <div id="Provinces" className="container-fluid">
        <NavPills group={'administrative-divisions'}></NavPills>
        <Table
          loading={loading}
          caption={'Provinces'}
          rows={provinces}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Provinces);
