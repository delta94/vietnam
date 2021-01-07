import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

import { Code } from '../globals';

class List extends Component {
  constructor() {
    super();

    this.state = { query: '', technologies: [], filterTechnologies: [], loading: true };

    this.getTechnologies = this.getTechnologies.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    await this.getTechnologies();
  }

  filter(event) {
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

  async getTechnologies() {
    this.setState({ loading: true });
    const { query = '' } = this.state;
    const technologies = await apis.getTechnologies();
    const filterTechnologies = technologies.filter(technology => {
      const { name, type } = technology;
      const nameFlag = query ? name.toLowerCase().includes(query.toLowerCase()) : true;
      const typeFlag = query ? type.toLowerCase().includes(query.toLowerCase()) : true;
      return nameFlag || typeFlag;
    });
    this.setState({ technologies, filterTechnologies, loading: false });
  }

  renderTable(loading, filterTechnologies = []) {
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <div className="table-responsive table-container h-50vh">
            <table className="table">
              <caption className="text-center bg-danger text-white">
                List ({filterTechnologies.length})
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
      <div id="List">
        <main className="container">
          <div className="mt-3 w-100">
            <Card className="shadow">
              <Card.Body>
                <Code method={'GET'} url={`technologies`}></Code>
                <Form className="mt-3 mb-3 w-100">
                  <Form.Control
                    type="text"
                    placeholder="Type"
                    value={this.state.value}
                    onChange={this.filter}></Form.Control>
                </Form>
                {this.renderTable(loading, filterTechnologies)}
              </Card.Body>
            </Card>
          </div>
        </main>
      </div>
    );
  }
}

export default List;
