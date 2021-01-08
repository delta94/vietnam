import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../services';

import { Table } from '../../components';

export default class GovernmentMinistries extends Component {
  constructor() {
    super();

    this.state = { ministries: [], loading: true };

    this.getMinistries = this.getMinistries.bind(this);
  }

  async componentDidMount() {
    await this.getMinistries();
  }

  async getMinistries() {
    this.setState({ loading: true });
    const ministries = await apis.getMinistries();
    this.setState({ ministries, loading: false });
  }

  render() {
    const { ministries = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Level', key: 'level' },
      { header: 'Level (EN)', key: 'level_en' },
      { header: 'Name', key: 'name' },
      { header: 'Name (EN)', key: 'name_en' }
    ];
    return (
      <div id="GovernmentMinistries" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Ministries'}
              rows={ministries}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
