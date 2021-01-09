import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../services';

import { Table } from '../../components';

export default class PhonesPrefixes extends Component {
  constructor() {
    super();

    this.state = { prefixes: [], loading: true };

    this.getPhonesPrefixes = this.getPhonesPrefixes.bind(this);
  }

  async componentDidMount() {
    await this.getPhonesPrefixes();
  }

  async getPhonesPrefixes() {
    await this.setState({ loading: true });
    const prefixes = await apis.getPhonesPrefixes();
    await this.setState({ prefixes, loading: false });
  }

  render() {
    const { prefixes = [], loading = true } = this.state;
    const rowConfigs = [
      { header: 'Prefix', key: 'prefix' },
      { header: 'Provider', key: 'provider' },
      { header: 'Provider ID', key: 'provider_id' }
    ];
    return (
      <div id="PhonesPrefixes" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Phone Prefixes'}
              rows={prefixes}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}