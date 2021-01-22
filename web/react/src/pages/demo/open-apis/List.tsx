import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';
import { NavPills } from '../../../components';

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
    this.renderTable = this.renderTable.bind(this);
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

  renderTable() {
    const { filterTechnologies = [], loading = true } = this.state;
    const {
      themeBorder = '',
      themeTextColor = '',
      themeSpinnerVariant = '',
      themePrimaryBackgroundColor = ''
    } = this.props;

    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant={themeSpinnerVariant}></Spinner>
          </div>
        )}
        {!loading && (
          <div className={`table-responsive table-container rounded-lg border ${themeBorder}`}>
            <table className="table">
              <caption className={`${themePrimaryBackgroundColor} text-center text-white`}>
                Open APIs ({filterTechnologies.length})
              </caption>
              <thead>
                <tr>
                  <th className={`${themeTextColor}`}>Name</th>
                  <th className={`${themeTextColor}`}>Type</th>
                  <th className={`${themeTextColor}`}>Package</th>
                </tr>
              </thead>
              <tbody>
                {filterTechnologies.length
                  ? filterTechnologies.map((ethnicMinority, index) => {
                      const { name = '', type = '', url = '', npm = '' } = ethnicMinority;
                      return (
                        <tr key={index}>
                          <td className={`${themeTextColor}`}>
                            <a
                              href={url}
                              rel="noreferrer"
                              target="_blank"
                              className={`${themeTextColor}`}>
                              <b>
                                <u>{name}</u>
                              </b>
                            </a>
                          </td>
                          <td className={`${themeTextColor}`}>{type}</td>
                          <td className={`${themeTextColor}`}>
                            {npm && (
                              <a
                                href={`https://www.npmjs.com/package/${npm}`}
                                rel="noreferrer"
                                target="_blank"
                                className={`${themeTextColor}`}>
                                <b>
                                  <u>npm</u>
                                </b>
                              </a>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  : ''}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }

  render() {
    const { query } = this.state;
    const { themeInput = '' } = this.props;
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
        {this.renderTable()}
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
