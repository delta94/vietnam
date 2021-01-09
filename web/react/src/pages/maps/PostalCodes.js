import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../services';

import { Table } from '../../components';

export default class MapsPostalCodes extends Component {
  constructor() {
    super();

    this.state = { postalCodes: [], loading: true };

    this.getMapsPostalCodes = this.getMapsPostalCodes.bind(this);
  }

  async componentDidMount() {
    await this.getMapsPostalCodes();
  }

  async getMapsPostalCodes() {
    await this.setState({ loading: true });
    const postalCodes = await apis.getMapsPostalCodes();
    await this.setState({ postalCodes, loading: false });
  }

  render() {
    const { postalCodes = [], loading = true } = this.state;
    const rowConfigs = [
      { header: 'Code', key: 'code' },
      { header: 'Province', key: 'province' }
    ];
    return (
      <div id="MapsPostalCodes" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Postal Codes'}
              rows={postalCodes}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
