import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface IOpenAPIsListProps {
  theme: string;
}

interface IOpenAPIsListState {
  query: string;
  technologies: Array<any>;
  filterTechnologies: Array<any>;
  loading: boolean;
}

class OpenAPIsList extends Component<IOpenAPIsListProps, IOpenAPIsListState> {
  constructor(props: IOpenAPIsListProps) {
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
    const { theme } = this.props;
    const textColor: string = theme === 'light' ? 'text-dark' : 'text-white';
    const spinnerVariant: string = theme === 'light' ? 'danger' : 'light';
    const borderColor: string = theme === 'light' ? '' : 'border-white';
    const bgColor: string = theme === 'light' ? 'bg-danger' : 'bg-black';
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant={spinnerVariant}></Spinner>
          </div>
        )}
        {!loading && (
          <div className={`table-responsive table-container rounded-lg border ${borderColor}`}>
            <table className="table">
              <caption className={`${bgColor} text-center text-white`}>
                Open APIs ({filterTechnologies.length})
              </caption>
              <thead>
                <tr>
                  <th className={`${textColor}`}>Name</th>
                  <th className={`${textColor}`}>Type</th>
                  <th className={`${textColor}`}>Package</th>
                </tr>
              </thead>
              <tbody>
                {filterTechnologies.length
                  ? filterTechnologies.map((ethnicMinority, index) => {
                      const { name = '', type = '', url = '', npm = '' } = ethnicMinority;
                      return (
                        <tr key={index}>
                          <td className={`${textColor}`}>
                            <a
                              href={url}
                              rel="noreferrer"
                              target="_blank"
                              className={`${textColor}`}>
                              <b>
                                <u>{name}</u>
                              </b>
                            </a>
                          </td>
                          <td className={`${textColor}`}>{type}</td>
                          <td className={`${textColor}`}>
                            {npm && (
                              <a
                                href={`https://www.npmjs.com/package/${npm}`}
                                rel="noreferrer"
                                target="_blank"
                                className={`${textColor}`}>
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
    return (
      <div id="OpenAPIsList" className="container-fluid">
        <Form className="mt-3 mb-3 w-100">
          <Form.Control
            type="text"
            placeholder="Type"
            value={this.state.query}
            onChange={this.filter}></Form.Control>
        </Form>
        {this.renderTable()}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { theme } = state;
  return { theme };
};

export default connect(mapStateToProps)(OpenAPIsList);
