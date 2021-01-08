import React, { Component } from 'react';
import { Card, Form } from 'react-bootstrap';

import { apis } from '../../services';

import { Table } from '../../components';

export default class GovernmentMinisters extends Component {
  constructor() {
    super();

    this.state = { ministry: '', ministries: [], ministers: [], loading: true };

    this.getMinistries = this.getMinistries.bind(this);
    this.getMinisters = this.getMinisters.bind(this);
    this.updateMinistry = this.updateMinistry.bind(this);
  }

  async componentDidMount() {
    await this.getMinistries();
    await this.getMinisters();
  }

  async getMinistries() {
    const ministries = await apis.getMinistries();
    const { short: ministry = '' } = ministries[0];
    this.setState({ ministry, ministries });
  }

  async getMinisters() {
    const { ministry } = this.state;
    this.setState({ loading: true });
    const ministers = await apis.getMinisters(ministry);
    this.setState({ ministers, loading: false });
  }

  async updateMinistry(event) {
    const { value: ministry } = event.target;
    await this.setState({ ministry });
    await this.getMinisters();
  }

  render() {
    const { ministers = [], ministries = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Start', key: 'start_date' },
      { header: 'End', key: 'end_date' }
    ];
    return (
      <div id="GovernmentMinisters" className="container">
        <Card className="shadow mt-3">
          <Card.Body>
            <Form className="mt-3 w-100">
              <Form.Group>
                <Form.Control
                  as="select"
                  defaultValue="latest"
                  value={this.state.value}
                  onChange={this.updateMinistry}>
                  {ministries.map((ministry, index) => {
                    const { short, name } = ministry;
                    return (
                      <option key={index} value={short}>
                        {name}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Form>
            <Table
              loading={loading}
              caption={'Ministers'}
              rows={ministers}
              rowConfigs={rowConfigs}></Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
