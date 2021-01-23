import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table, NavPills } from '../../../components';
import { apis } from '../../../services';

interface IClubsProps {}

interface IClubsState {
  clubs: Array<any>;
  loading: boolean;
}

class Clubs extends Component<IClubsProps, IClubsState> {
  constructor(props: IClubsProps) {
    super(props);

    this.state = { clubs: [], loading: true };

    this.getClubs = this.getClubs.bind(this);
  }

  async componentDidMount() {
    await this.getClubs();
  }

  async getClubs() {
    this.setState({ loading: true });
    const clubs: Array<any> = await apis.getSportsClubs();
    this.setState({ clubs, loading: false });
  }

  render() {
    const { clubs = [], loading = false } = this.state;

    const rowConfigs = [
      { header: 'Sport', key: 'sport' },
      { header: 'Competition', key: 'competition' },
      { header: 'City', key: 'city' },
      { header: 'Name', key: 'name' }
    ];

    return (
      <div id="Clubs" className="container-fluid">
        <NavPills group={'sports'}></NavPills>
        <Table loading={loading} caption={'Clubs'} rows={clubs} rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {};
};

export default connect(mapStateToProps)(Clubs);
