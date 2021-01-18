import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IMapsProvincesProps {}

interface IMapsProvincesState {
  provinces: Array<any>;
  loading: boolean;
}

export default class MapsProvinces extends Component<IMapsProvincesProps, IMapsProvincesState> {
  constructor(props: IMapsProvincesProps) {
    super(props);

    this.state = { provinces: [], loading: true };

    this.getProvinces = this.getProvinces.bind(this);
  }

  async componentDidMount() {
    await this.getProvinces();
  }

  async getProvinces() {
    this.setState({ loading: true });
    const provinces = await apis.getProvinces();
    this.setState({ provinces, loading: false });
  }

  render() {
    const { provinces, loading } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Capital', key: 'capital' },
      { header: 'Macro Region', key: 'macroRegion' },
      { header: 'Region', key: 'region' }
    ];
    return (
      <div id="MapsProvinces" className="container-fluid">
        <Card>
          <Card.Body>
            <Table
              loading={loading}
              caption={'Provinces'}
              rows={provinces}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}