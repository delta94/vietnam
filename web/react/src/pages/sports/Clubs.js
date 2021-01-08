import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Code, Table } from '../../components';
import { apis } from '../../services';

export default class SportsClubs extends Component {
  constructor() {
    super();

    this.state = { clubs: [], loading: true };

    this.getSportsClubs = this.getSportsClubs.bind(this);
  }

  async componentDidMount() {
    await this.getSportsClubs();
  }

  async getSportsClubs() {
    this.setState({ loading: true });
    const clubs = await apis.getSportsClubs();
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
      <div id="SportsClubs" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <div className="mb-3">
              <Code method={'GET'} path={`sports/clubs`}></Code>
            </div>
            <Table loading={loading} caption={'Clubs'} rows={clubs} rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
