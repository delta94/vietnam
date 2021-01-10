import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IGovernmentPrimeMinistersProps {}

interface IGovernmentPrimeMinistersState {
  primeMinisters: Array<any>;
  loading: boolean;
}

export default class GovernmentPrimeMinisters extends Component<
  IGovernmentPrimeMinistersProps,
  IGovernmentPrimeMinistersState
> {
  constructor(props: IGovernmentPrimeMinistersProps) {
    super(props);

    this.state = { primeMinisters: [], loading: true };

    this.getPrimeMinisters = this.getPrimeMinisters.bind(this);
  }

  async componentDidMount() {
    await this.getPrimeMinisters();
  }

  async getPrimeMinisters() {
    this.setState({ loading: true });
    const primeMinisters = await apis.getPrimeMinisters();
    this.setState({ primeMinisters, loading: false });
  }

  render() {
    const { primeMinisters = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Start', key: 'start_date' },
      { header: 'End', key: 'end_date' }
    ];
    return (
      <div id="GovernmentPrimeMinisters" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Prime Ministers'}
              rows={primeMinisters}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
