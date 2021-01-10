import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IMapsWardsProps {}

interface IMapsWardsState {
  wards: Array<any>;
  loading: boolean;
}

export default class MapsWards extends Component<IMapsWardsProps, IMapsWardsState> {
  constructor(props: IMapsWardsProps) {
    super(props);

    this.state = { wards: [], loading: true };

    this.getMapsWards = this.getMapsWards.bind(this);
  }

  async componentDidMount() {
    await this.getMapsWards();
  }

  async getMapsWards() {
    this.setState({ loading: true });
    const wards = await apis.getMapsWards();
    this.setState({ wards, loading: false });
  }

  render() {
    const { wards, loading } = this.state;
    const rowConfigs = [
      { header: 'Ward', key: 'ward' },
      { header: 'District', key: 'district' },
      { header: 'Province', key: 'province' }
    ];
    return (
      <div id="MapsWards" className="container">
        <Card className="shadow mt-3 mb-5">
          <Card.Body>
            <Table loading={loading} caption={'Wards'} rows={wards} rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
