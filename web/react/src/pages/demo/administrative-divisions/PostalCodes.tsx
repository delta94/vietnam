import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../services';
import { Table, NavPills } from '../../../components';

interface IPostalCodesProps {}

interface IPostalCodesState {
  postalCodes: Array<any>;
  loading: boolean;
}

class PostalCodes extends Component<IPostalCodesProps, IPostalCodesState> {
  constructor(props: IPostalCodesProps) {
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
      <div id="PostalCodes" className="container-fluid">
        <NavPills group={'administrative-divisions'}></NavPills>
        <Table
          loading={loading}
          caption={'Postal Codes'}
          rows={postalCodes}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(PostalCodes);
