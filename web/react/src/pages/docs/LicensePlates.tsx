import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';

import { apis } from '../../services';
import { Doc, Table } from '../../components';

interface ILicensePlatesProps {}

interface ILicensePlatesState {
  query: string;
  licensePlates: Array<any>;
  filterLicensePlates: Array<any>;
  loading: boolean;
}

export default class LicensePlates extends Component<ILicensePlatesProps, ILicensePlatesState> {
  constructor(props: ILicensePlatesProps) {
    super(props);

    this.state = { query: '', licensePlates: [], filterLicensePlates: [], loading: true };

    this.getLicensePlates = this.getLicensePlates.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    await this.getLicensePlates();
  }

  filter(event: any) {
    const { value: query = '' } = event.target;
    this.setState({ query });
    const { licensePlates = [] } = this.state;
    const filterLicensePlates = licensePlates.filter(licensePlate => {
      const { license } = licensePlate;
      return query ? license.toLowerCase().includes(query.toLowerCase()) : true;
    });
    this.setState({ filterLicensePlates });
  }

  async getLicensePlates() {
    this.setState({ loading: true });
    const { query = '' } = this.state;
    const licensePlates = await apis.getLicensePlates();
    const filterLicensePlates = licensePlates.filter((licensePlate: any) => {
      const { license } = licensePlate;
      return query ? license.toLowerCase().includes(query.toLowerCase()) : true;
    });
    this.setState({ licensePlates, filterLicensePlates, loading: false });
  }

  render() {
    const { filterLicensePlates = [], loading = true } = this.state;
    const rowConfigs = [
      { header: 'License', key: 'license' },
      { header: 'Definition', key: 'definition' },
      { header: 'Type', key: 'type' }
    ];
    return (
      <div id="LicensePlates" className="container">
        <Doc group={'licensePlates'} header={'License Plates'}></Doc>
        <Card className="shadow mt-3">
          <Card.Body>
            <Form className="mb-3 w-100">
              <Form.Control
                type="text"
                placeholder="License"
                value={this.state.query}
                onChange={this.filter}></Form.Control>
            </Form>
            <Table
              loading={loading}
              caption={'License Plates'}
              rows={filterLicensePlates}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
