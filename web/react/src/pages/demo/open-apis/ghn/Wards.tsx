import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

import { apis } from '../../../../services';
import { Table } from '../../../../components';

interface IWardsProps {}

interface IWardsState {
  wards: Array<any>;
  loading: boolean;
}

export default class Wards extends Component<IWardsProps, IWardsState> {
  constructor(props: IWardsProps) {
    super(props);

    this.state = { wards: [], loading: true };

    this.getGHNWards = this.getGHNWards.bind(this);
  }

  async componentDidMount() {
    await this.getGHNWards();
  }

  async getGHNWards() {
    this.setState({ loading: true });
    const wards = await apis.getGHNWards();
    this.setState({ wards, loading: false });
  }

  render() {
    const { wards, loading } = this.state;

    const rowConfigs = [
      { header: 'District ID', key: 'district_id' },
      { header: 'Name', key: 'name' },
      { header: 'Code', key: 'code' }
    ];

    return (
      <div id="Wards" className="container-fluid">
        <Card>
          <Card.Body>
            <Card.Title className="text-center mb-3">GHN Wards</Card.Title>
            <Card.Subtitle className="text-center mb-3">
              <a
                href={`https://www.npmjs.com/package/giaohangnhanh`}
                rel="noreferrer"
                target="_blank">
                npm
              </a>
            </Card.Subtitle>
            <Table loading={loading} caption={'Wards'} rows={wards} rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
