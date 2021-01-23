import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { Table } from '../../../components';
import { apis } from '../../../services';

interface IListProps {
  themeInput: string;
}

interface IListState {
  query: string;
  visas: Array<any>;
  filterVisas: Array<any>;
  loading: boolean;
}

class List extends Component<IListProps, IListState> {
  constructor(props: IListProps) {
    super(props);

    this.state = { query: '', visas: [], filterVisas: [], loading: true };

    this.getVisas = this.getVisas.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    await this.getVisas();
  }

  filter(event: any) {
    const { value: query = '' } = event.target;
    this.setState({ query });
    const { visas = [] } = this.state;
    const filterVisas = visas.filter(visa => {
      let { country = '', requirement = '' } = visa;
      const countryFlag = query ? country.toLowerCase().includes(query.toLowerCase()) : true;
      const requirementFlag = query
        ? requirement.toLowerCase().includes(query.toLowerCase())
        : true;
      return countryFlag || requirementFlag;
    });
    this.setState({ filterVisas });
  }

  async getVisas() {
    this.setState({ loading: true });
    const { query = '' } = this.state;
    const visas: Array<any> = await apis.getVisas();
    const filterVisas = visas.filter(visa => {
      let { country = '', requirement = '' } = visa;
      const countryFlag = query ? country.toLowerCase().includes(query.toLowerCase()) : true;
      const requirementFlag = query
        ? requirement.toLowerCase().includes(query.toLowerCase())
        : true;
      return countryFlag || requirementFlag;
    });
    await this.setState({ filterVisas, visas, loading: false });
  }

  renderForm() {
    const { query = '' } = this.state;
    const { themeInput = '' } = this.props;
    return (
      <Form className="mb-3">
        <Form.Control
          type="text"
          placeholder="Query"
          value={query}
          className={`${themeInput}`}
          onChange={this.filter}></Form.Control>
      </Form>
    );
  }

  render() {
    const { filterVisas = [], loading = false } = this.state;

    const rowConfigs = [
      { header: 'Country', key: 'country' },
      { header: 'Requirement', key: 'requirement' }
    ];

    return (
      <div id="List" className="container-fluid">
        {this.renderForm()}
        <Table
          loading={loading}
          caption={'Visas'}
          rows={filterVisas}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  return { themeInput };
};

export default connect(mapStateToProps)(List);
