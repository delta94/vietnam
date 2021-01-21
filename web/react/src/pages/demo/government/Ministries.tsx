import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IMinistriesProps {}

interface IMinistriesState {
  ministries: Array<any>;
  loading: boolean;
}

class Ministries extends Component<IMinistriesProps, IMinistriesState> {
  constructor(props: IMinistriesProps) {
    super(props);

    this.state = { ministries: [], loading: true };

    this.getMinistries = this.getMinistries.bind(this);
  }

  async componentDidMount() {
    await this.getMinistries();
  }

  async getMinistries() {
    this.setState({ loading: true });
    const ministries = await apis.getMinistries();
    this.setState({ ministries, loading: false });
  }

  render() {
    const { ministries = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Level', key: 'level' },
      { header: 'Level (EN)', key: 'level_en' },
      { header: 'Name', key: 'name' },
      { header: 'Name (EN)', key: 'name_en' }
    ];
    return (
      <div id="Ministries" className="container-fluid">
        <Table
          loading={loading}
          caption={'Ministries'}
          rows={ministries}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Ministries);
