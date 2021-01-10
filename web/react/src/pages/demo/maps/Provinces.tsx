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

    this.getMapsProvinces = this.getMapsProvinces.bind(this);
  }

  async componentDidMount() {
    await this.getMapsProvinces();
  }

  async getMapsProvinces() {
    this.setState({ loading: true });
    const provinces = await apis.getMapsProvinces();
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
      <div id="MapsProvinces" className="container">
        <Card className="shadow mt-3 mb-5">
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
