import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../services';

import { Table } from '../../components';

export default class MapsDistricts extends Component {
  constructor() {
    super();

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
      <div id="MapsDistricts" className="container">
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
