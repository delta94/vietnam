import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { apis } from '../../../services';
import { Table } from '../../../components';

interface ListProps {
  themeInput: string;
}

interface ListState {
  query: string;
  licensePlates: Array<any>;
  filterLicensePlates: Array<any>;
  loading: boolean;
}

class List extends Component<ListProps, ListState> {
  constructor(props: ListProps) {
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
      let { license = '' } = licensePlate;
      license = license.toString();
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
    await this.setState({ licensePlates, filterLicensePlates, loading: false });
  }

  render() {
    const { filterLicensePlates = [], loading = true } = this.state;
    const { themeInput = '' } = this.props;
    const rowConfigs = [
      { header: 'License', key: 'license' },
      { header: 'Definition', key: 'definition' },
      { header: 'Type', key: 'type' }
    ];
    return (
      <div id="List" className="container-fluid">
        <Form className="mb-3">
          <Form.Control
            type="text"
            placeholder="License"
            value={this.state.query}
            className={`${themeInput}`}
            onChange={this.filter}></Form.Control>
        </Form>
        <Table
          loading={loading}
          caption={'License Plates'}
          rows={filterLicensePlates}
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
