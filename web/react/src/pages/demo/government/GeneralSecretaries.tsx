import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IGovernmentGeneralSecretariesProps {}

interface IGovernmentGeneralSecretariesState {
  generalSecretaries: Array<any>;
  loading: boolean;
}

export default class GovernmentGeneralSecretaries extends Component<
  IGovernmentGeneralSecretariesProps,
  IGovernmentGeneralSecretariesState
> {
  constructor(props: IGovernmentGeneralSecretariesProps) {
    super(props);

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
        <Card className="shadow mt-3 mb-5">
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
