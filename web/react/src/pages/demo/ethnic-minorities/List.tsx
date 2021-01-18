import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IEthnicMinoritiesListProps {}

interface IEthnicMinoritiesListState {
  query: string;
  ethnicMinorities: Array<any>;
  filterEthnicMinorities: Array<any>;
  loading: boolean;
}

export default class EthnicMinoritiesList extends Component<
  IEthnicMinoritiesListProps,
  IEthnicMinoritiesListState
> {
  constructor(props: IEthnicMinoritiesListProps) {
    super(props);

    this.state = {
      query: '',
      ethnicMinorities: [],
      filterEthnicMinorities: [],
      loading: true
    };

    this.getEthnicMinorities = this.getEthnicMinorities.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    await this.getEthnicMinorities();
  }

  filter(event: any) {
    const { value: query = '' } = event.target;
    this.setState({ query });
    const { ethnicMinorities = [] } = this.state;
    const filterEthnicMinorities = ethnicMinorities.filter(ethnicMinority => {
      const { type, type_en } = ethnicMinority;
      const typeFlag = query ? type.toLowerCase().includes(query.toLowerCase()) : true;
      const typeEnFlag = query ? type_en.toLowerCase().includes(query.toLowerCase()) : true;
      return typeFlag || typeEnFlag;
    });
    this.setState({ filterEthnicMinorities });
  }

  async getEthnicMinorities() {
    this.setState({ loading: true });
    const { query = '' } = this.state;
    const ethnicMinorities = await apis.getEthnicMinorities();
    const filterEthnicMinorities = ethnicMinorities.filter((ethnicMinority: any) => {
      const { type, type_en } = ethnicMinority;
      const typeFlag = query ? type.toLowerCase().includes(query.toLowerCase()) : true;
      const typeEnFlag = query ? type_en.toLowerCase().includes(query.toLowerCase()) : true;
      return typeFlag || typeEnFlag;
    });
    this.setState({ ethnicMinorities, filterEthnicMinorities, loading: false });
  }

  render() {
    const { filterEthnicMinorities = [], loading = true } = this.state;

    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Type', key: 'type' },
      { header: 'Type (EN)', key: 'type_en' }
    ];

    return (
      <div id="EthnicMinoritiesList" className="container-fluid">
        <Form className="mb-3 w-100">
          <Form.Control
            type="text"
            placeholder="Query"
            value={this.state.query}
            onChange={this.filter}></Form.Control>
        </Form>
        <Card className="h-70vh overflow-auto">
          <Card.Body>
            <Table
              loading={loading}
              caption={'Ethnic Minorities'}
              rows={filterEthnicMinorities}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
