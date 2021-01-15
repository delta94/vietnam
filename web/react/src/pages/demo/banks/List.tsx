import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IBanksListProps {}

interface IBanksListState {
  banks: Array<any>;
  loading: boolean;
}

export default class BanksList extends Component<IBanksListProps, IBanksListState> {
  constructor(props: IBanksListProps) {
    super(props);

    this.state = { banks: [], loading: false };

    this.getBanks = this.getBanks.bind(this);
  }

  async componentDidMount() {
    await this.getBanks();
  }

  async getBanks() {
    this.setState({ loading: true });
    const banks = await apis.getBanks();
    this.setState({ banks, loading: false });
  }

  render() {
    const { banks = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Code', key: 'code' },
      { header: 'Name', key: 'name' },
      { header: 'Name (EN)', key: 'name_en' },
      { header: 'Name (Short)', key: 'name_short' },
      { header: 'Type', key: 'type' },
      { header: 'Type (EN)', key: 'type_en' }
    ];
    return (
      <div id="BanksList" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Banks'}
              rows={banks}
              rowConfigs={rowConfigs}
              rowIndexEnabled={true}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
