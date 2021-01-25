import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';

import { apis } from '../../../services';
import { NavPills, Table } from '../../../components';

interface IListProps {
  themeInput: string;
  themeBorder: string;
  themeTextColor: string;
  themeSpinnerVariant: string;
  themePrimaryBackgroundColor: string;
}

interface IListState {
  query: string;
  technologies: Array<any>;
  filterTechnologies: Array<any>;
  loading: boolean;
}

class List extends Component<IListProps, IListState> {
  constructor(props: IListProps) {
    super(props);

    this.state = { query: '', technologies: [], filterTechnologies: [], loading: true };

    this.getOpenAPIs = this.getOpenAPIs.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    await this.getOpenAPIs();
  }

  filter(event: any) {
    const { value: query = '' } = event.target;
    this.setState({ query });
    const { technologies = [] } = this.state;
    const filterTechnologies = technologies.filter(technology => {
      const { name, type } = technology;
      const nameFlag = query ? name.toLowerCase().includes(query.toLowerCase()) : true;
      const typeFlag = query ? type.toLowerCase().includes(query.toLowerCase()) : true;
      return nameFlag || typeFlag;
    });
    this.setState({ filterTechnologies });
  }

  async getOpenAPIs() {
    this.setState({ loading: true });
    const { query = '' } = this.state;
    const technologies = await apis.getOpenAPIs();
    const filterTechnologies = technologies.filter((technology: any) => {
      const { name, type } = technology;
      const nameFlag = query ? name.toLowerCase().includes(query.toLowerCase()) : true;
      const typeFlag = query ? type.toLowerCase().includes(query.toLowerCase()) : true;
      return nameFlag || typeFlag;
    });
    this.setState({ technologies, filterTechnologies, loading: false });
  }

  render() {
    const { query = '', filterTechnologies = [], loading = true } = this.state;
    const { themeInput = '' } = this.props;
    const rowConfigs = [
      { header: 'Name', key: 'name', type: 'link' },
      { header: 'Type', key: 'type' },
      { header: 'npm', key: 'npm', type: 'npm' }
    ];
    return (
      <div id="List" className="container-fluid">
        <NavPills group={'open-apis'}></NavPills>
        <Form className="mb-3">
          <Form.Control
            type="text"
            placeholder="Type"
            className={`${themeInput}`}
            value={query}
            onChange={this.filter}></Form.Control>
        </Form>
        <Table
          loading={loading}
          caption={'Open APIs'}
          rows={filterTechnologies}
          rowConfigs={rowConfigs}></Table>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const themeInput: string = _.get(state, 'theme.input', '');
  const themeBorder: string = _.get(state, 'theme.border', '');
  const themeTextColor: string = _.get(state, 'theme.textColor', '');
  const themeSpinnerVariant: string = _.get(state, 'theme.spinnerVariant', '');
  const themePrimaryBackgroundColor: string = _.get(state, 'theme.primaryBackgroundColor', '');
  return {
    themeInput,
    themeBorder,
    themeTextColor,
    themeSpinnerVariant,
    themePrimaryBackgroundColor
  };
};

export default connect(mapStateToProps)(List);
