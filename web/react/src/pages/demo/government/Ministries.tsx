import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IGovernmentMinistriesProps {}

interface IGovernmentMinistriesState {
  ministries: Array<any>;
  loading: boolean;
}

export default class GovernmentMinistries extends Component<
  IGovernmentMinistriesProps,
  IGovernmentMinistriesState
> {
  constructor(props: IGovernmentMinistriesProps) {
    super(props);

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
      <div id="GovernmentMinistries" className="container-fluid">
        <Card>
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
