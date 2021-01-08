import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../services';

import { Table } from '../../components';

export default class MapsDistricts extends Component {
  constructor() {
    super();

    this.state = { districts: [], loading: true };

    this.getDistricts = this.getDistricts.bind(this);
  }

  async componentDidMount() {
    await this.getDistricts();
  }

  async getDistricts() {
    await this.setState({ loading: true });
    const districts = await apis.getDistricts();
    await this.setState({ districts, loading: false });
  }

  render() {
    const { districts = [], loading = true } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Level', key: 'level' },
      { header: 'Province', key: 'province' }
    ];
    return (
      <div id="MapsDistricts" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Districts'}
              rows={districts}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
