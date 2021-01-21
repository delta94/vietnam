import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from '../../../components';
import { apis } from '../../../services';

interface IDynastiesProps {}

interface IDynastiesState {
  dynasties: Array<any>;
  loading: boolean;
}

class Dynasties extends Component<IDynastiesProps, IDynastiesState> {
  constructor(props: IDynastiesProps) {
    super(props);

    this.state = { dynasties: [], loading: true };

    this.getDynasties = this.getDynasties.bind(this);
  }

  async componentDidMount() {
    await this.getDynasties();
  }

  async getDynasties() {
    this.setState({ loading: true });
    const dynasties: Array<any> = await apis.getDynasties();
    this.setState({ dynasties, loading: false });
  }

  render() {
    const { dynasties = [], loading = false } = this.state;

    const rowConfigs = [
      { header: 'Temple Name', key: 'temple_name' },
      { header: 'Birth Name', key: 'birth_name' },
      { header: 'Start', key: 'start_year' },
      { header: 'End', key: 'end_year' },
      { header: 'Dynasty', key: 'dynasty' }
    ];

    return (
      <div id="Dynasties" className="container-fluid">
        <Table
          loading={loading}
          caption={'Dynasties'}
          rows={dynasties}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Dynasties);
