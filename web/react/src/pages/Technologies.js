import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { apis } from '../services';

class Technologies extends Component {
  constructor() {
    super();

    this.state = { query: '', technologies: [], filterTechnologies: [], loading: true };

    this.getTechnologies = this.getTechnologies.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    await this.getTechnologies();
  }

  filter(event) {
    const { value: query = '' } = event.target;
    this.setState({ query });
    const { technologies = [] } = this.state;
    const filterTechnologies = technologies.filter(ethnicMinority => {
      const { type } = ethnicMinority;
      return query ? type.toLowerCase().includes(query.toLowerCase()) : true;
    });
    this.setState({ filterTechnologies });
  }

  async getTechnologies() {
    this.setState({ loading: true });
    const { query = '' } = this.state;
    const technologies = await apis.getTechnologies();
    const filterTechnologies = technologies.filter(ethnicMinority => {
      const { license } = ethnicMinority;
      return query ? license.includes(query) : true;
    });
    this.setState({ technologies, filterTechnologies, loading: false });
  }

  render() {
    const { filterTechnologies = [], loading = true } = this.state;

    return (
      <div id="Technologies">
        <main className="container">
          <div className="mt-3 w-100">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="text-center">
                  Technologies ({filterTechnologies.length})
                </Card.Title>
                <Form className="mt-3 mb-3 w-100">
                  <Form.Control
                    type="text"
                    placeholder="Type"
                    value={this.state.value}
                    onChange={this.filter}></Form.Control>
                </Form>
                {loading && (
                  <div className="text-center">
                    <Spinner animation="border" variant="danger"></Spinner>
                  </div>
                )}
                {!loading && (
                  <div className="table-responsive table-container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Type</th>
                          <th>npm</th>
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
              </Card.Body>
            </Card>
          </div>
        </main>
      </div>
    );
  }
}

export default Technologies;
