import React, { Component } from 'react';
import { connect } from 'react-redux';

import { apis } from '../../../services';
import { Table, NavPills } from '../../../components';

interface IListProps {}

interface IListState {
  banks: Array<any>;
  loading: boolean;
}

class List extends Component<IListProps, IListState> {
  constructor(props: IListProps) {
    super(props);

    this.state = { banks: [], loading: false };

    this.getBanks = this.getBanks.bind(this);
  }

  async componentDidMount() {
    await this.getBanks();
  }

  async getBanks() {
    this.setState({ loading: true });
    const banks = await apis.getBanks();
    this.setState({ banks, loading: false });
  }

  render() {
    const { banks = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Code', key: 'code' },
      { header: 'Name', key: 'name' },
      { header: 'Name (EN)', key: 'name_en' },
      { header: 'Name (Short)', key: 'name_short' },
      { header: 'Type', key: 'type' },
      { header: 'Type (EN)', key: 'type_en' }
    ];
    return (
      <div id="List" className="container-fluid">
        <NavPills group={'banks'}></NavPills>
        <Table
          loading={loading}
          caption={'Banks'}
          rows={banks}
          rowConfigs={rowConfigs}
          rowIndexEnabled={true}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(List);
