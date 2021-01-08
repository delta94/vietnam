import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';

import { apis } from '../../services';

import { Doc, Table } from '../../components';

export default class EthnicMinorities extends Component {
  constructor() {
    super();

    this.state = { query: '', ethnicMinorities: [], filterEthnicMinorities: [], loading: true };

    this.getEthnicMinorities = this.getEthnicMinorities.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    await this.getEthnicMinorities();
  }

  filter(event) {
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
    const filterEthnicMinorities = ethnicMinorities.filter(ethnicMinority => {
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
      <div id="EthnicMinorities" className="container">
        <Doc group={'ethnicMinorities'} header={'Ethnic Minorities'}></Doc>
        <Card className="shadow mt-3">
          <Card.Body>
            <Form className="mt-3 mb-3 w-100">
              <Form.Control
                type="text"
                placeholder="Type"
                value={this.state.value}
                onChange={this.filter}></Form.Control>
            </Form>
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
