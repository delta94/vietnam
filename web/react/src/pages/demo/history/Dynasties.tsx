import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { Table } from '../../../components';
import { apis } from '../../../services';

interface IHistoryDynastiesProps {}

interface IHistoryDynastiesState {
  dynasties: Array<any>;
  loading: boolean;
}

export default class HistoryDynasties extends Component<
  IHistoryDynastiesProps,
  IHistoryDynastiesState
> {
  constructor(props: IHistoryDynastiesProps) {
    super(props);

    this.state = { dynasties: [], loading: true };

    this.getHistoryDynasties = this.getHistoryDynasties.bind(this);
  }

  async componentDidMount() {
    await this.getHistoryDynasties();
  }

  async getHistoryDynasties() {
    this.setState({ loading: true });
    const dynasties: Array<any> = await apis.getDynasties();
    this.setState({ dynasties, loading: false });
  }

  render() {
    const { dynasties = [], loading = false } = this.state;

    const rowConfigs = [
      { header: 'Temple Name', key: 'temple_name' },
      { header: 'Birth Name', key: 'birth_name' },
      { header: 'Start', key: 'start_year' },
      { header: 'End', key: 'end_year' },
      { header: 'Dynasty', key: 'dynasty' }
    ];

    return (
      <div id="HistoryDynasties" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Dynasties'}
              rows={dynasties}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
