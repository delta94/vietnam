import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface IGovernmentMinistersProps {}

interface IGovernmentMinistersState {
  ministry: string;
  ministries: Array<any>;
  ministers: Array<any>;
  loading: boolean;
}

export default class GovernmentMinisters extends Component<
  IGovernmentMinistersProps,
  IGovernmentMinistersState
> {
  constructor(props: IGovernmentMinistersProps) {
    super(props);

    this.state = { ministry: '', ministries: [], ministers: [], loading: true };

    this.getMinistries = this.getMinistries.bind(this);
    this.getMinisters = this.getMinisters.bind(this);
    this.updateMinistry = this.updateMinistry.bind(this);
    this.renderForm = this.renderForm.bind(this);
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

  async updateMinistry(event: any) {
    const { value: ministry } = event.target;
    await this.setState({ ministry });
    await this.getMinisters();
  }

  renderForm() {
    const { ministries = [] } = this.state;
    return (
      ministries.length > 0 && (
        <Form>
          <Form.Group>
            <Form.Control as="select" value={this.state.ministry} onChange={this.updateMinistry}>
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
      )
    );
  }

  render() {
    const { ministers = [], loading = false } = this.state;
    const rowConfigs = [
      { header: 'Name', key: 'name' },
      { header: 'Start', key: 'start_date' },
      { header: 'End', key: 'end_date' }
    ];
    return (
      <div id="GovernmentMinisters" className="container-fluid">
        {this.renderForm()}
        <Table
          loading={loading}
          caption={'Ministers'}
          rows={ministers}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}
