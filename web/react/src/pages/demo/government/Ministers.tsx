import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table, NavPills } from '../../../components';

interface IMinistersProps {
  themeInput: string;
}

interface IMinistersState {
  ministry: string;
  ministries: Array<any>;
  ministers: Array<any>;
  loading: boolean;
}

class Ministers extends Component<IMinistersProps, IMinistersState> {
  constructor(props: IMinistersProps) {
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
    const { ministries = [], ministry = '' } = this.state;
    const { themeInput } = this.props;
    return (
      ministries.length > 0 && (
        <Form>
          <Form.Group>
            <Form.Control
              as="select"
              className={themeInput}
              value={ministry}
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
      <div id="Ministers" className="container-fluid">
        <NavPills group={'government'}></NavPills>
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

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  return { themeInput };
};

export default connect(mapStateToProps)(Ministers);
