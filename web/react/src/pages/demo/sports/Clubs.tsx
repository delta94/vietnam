import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Table } from '../../../components';
import { apis } from '../../../services';

interface ISportsClubsProps {}

interface ISportsClubsState {
  clubs: Array<any>;
  loading: boolean;
}

export default class SportsClubs extends Component<ISportsClubsProps, ISportsClubsState> {
  constructor(props: ISportsClubsProps) {
    super(props);

    this.state = { clubs: [], loading: true };

    this.getSportsClubs = this.getSportsClubs.bind(this);
  }

  async componentDidMount() {
    await this.getSportsClubs();
  }

  async getSportsClubs() {
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
      <div id="SportsClubs" className="container-fluid">
        <Card>
          <Card.Body>
            <Table loading={loading} caption={'Clubs'} rows={clubs} rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
