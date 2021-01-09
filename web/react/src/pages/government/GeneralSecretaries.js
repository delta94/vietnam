import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../services';

import { Table } from '../../components';

export default class GovernmentGeneralSecretaries extends Component {
  constructor() {
    super();

    this.state = { generalSecretaries: [], loading: true };

    this.getGeneralSecretaries = this.getGeneralSecretaries.bind(this);
  }

  async componentDidMount() {
    await this.getGeneralSecretaries();
  }

  async getGeneralSecretaries() {
    this.setState({ loading: true });
    const generalSecretaries = await apis.getGeneralSecretaries();
    this.setState({ generalSecretaries, loading: false });
  }

  render() {
    const { generalSecretaries = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Start', key: 'start_date' },
      { header: 'End', key: 'end_date' }
    ];
    return (
      <div id="GovernmentGeneralSecretaries" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Table
              loading={loading}
              caption={'General Secretaries'}
              rows={generalSecretaries}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
