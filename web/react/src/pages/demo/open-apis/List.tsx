import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

interface IOpenAPIsListProps {}

interface IOpenAPIsListState {
  query: string;
  technologies: Array<any>;
  filterTechnologies: Array<any>;
  loading: boolean;
}

export default class OpenAPIsList extends Component<IOpenAPIsListProps, IOpenAPIsListState> {
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

  renderTable(loading: boolean, filterTechnologies: Array<any> = []) {
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <div className="table-responsive table-container">
            <table className="table">
              <caption className="text-center bg-danger text-white">
                Open APIs ({filterTechnologies.length})
              </caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Package</th>
                </tr>
              </thead>
              <tbody>
                {filterTechnologies.length
                  ? filterTechnologies.map((ethnicMinority, index) => {
                      const { name = '', type = '', url = '', npm = '' } = ethnicMinority;
                      return (
                        <tr key={index}>
                          <td>
                            <a href={url} rel="noreferrer" target="_blank">
                              {name}
                            </a>
                          </td>
                          <td>{type}</td>
                          <td>
                            {npm && (
                              <a
                                href={`https://www.npmjs.com/package/${npm}`}
                                rel="noreferrer"
                                target="_blank">
                                npm
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
    const { filterTechnologies = [], loading = true } = this.state;

    return (
      <div id="OpenAPIsList" className="container-fluid">
        <Card>
          <Card.Body>
            <Form className="mt-3 mb-3 w-100">
              <Form.Control
                type="text"
                placeholder="Type"
                aria-labelledby="Type"
                value={this.state.query}
                onChange={this.filter}></Form.Control>
            </Form>
            {this.renderTable(loading, filterTechnologies)}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
