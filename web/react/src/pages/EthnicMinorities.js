import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { apis } from '../services';

class EthnicMinorities extends Component {
  constructor() {
    super();

    this.state = { query: '', ethnicMinorities: [], filterEthnicMinorities: [], loading: true };

    this.getEthnicMinorities = this.getEthnicMinorities.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    await this.getEthnicMinorities();
  }

  filter(event) {
    const { value: query = '' } = event.target;
    this.setState({ query });
    const { ethnicMinorities = [] } = this.state;
    const filterEthnicMinorities = ethnicMinorities.filter(ethnicMinority => {
      const { type } = ethnicMinority;
      return query ? type.toLowerCase().includes(query.toLowerCase()) : true;
    });
    this.setState({ filterEthnicMinorities });
  }

  async getEthnicMinorities() {
    this.setState({ loading: true });
    const { query = '' } = this.state;
    const ethnicMinorities = await apis.getEthnicMinorities();
    const filterEthnicMinorities = ethnicMinorities.filter(ethnicMinority => {
      const { license } = ethnicMinority;
      return query ? license.includes(query) : true;
    });
    this.setState({ ethnicMinorities, filterEthnicMinorities, loading: false });
  }

  render() {
    const { filterEthnicMinorities = [], loading = true } = this.state;

    return (
      <div id="EthnicMinorities">
        <main className="container">
          <div className="mt-3 w-100">
            <Card className="shadow">
              <Card.Body>
                <Card.Title className="text-center">
                  Ethnic Minorities ({filterEthnicMinorities.length})
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
                          <th>Type (EN)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filterEthnicMinorities.length
                          ? filterEthnicMinorities.map((ethnicMinority, index) => {
                              const { name = '', type = '', type_en = '' } = ethnicMinority;
                              return (
                                <tr key={index}>
                                  <td>{name}</td>
                                  <td>{type}</td>
                                  <td>{type_en}</td>
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

export default EthnicMinorities;
