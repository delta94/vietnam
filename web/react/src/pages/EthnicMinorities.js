import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { apis } from '../services';

import { Code } from '../components';

class EthnicMinorities extends Component {
  constructor() {
    super();

    this.state = { query: '', ethnicMinorities: [], filterEthnicMinorities: [], loading: true };

    this.getEthnicMinorities = this.getEthnicMinorities.bind(this);
    this.renderTable = this.renderTable.bind(this);
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
      const { type, type_en } = ethnicMinority;
      const typeFlag = query ? type.toLowerCase().includes(query.toLowerCase()) : true;
      const typeEnFlag = query ? type_en.toLowerCase().includes(query.toLowerCase()) : true;
      return typeFlag || typeEnFlag;
    });
    this.setState({ filterEthnicMinorities });
  }

  async getEthnicMinorities() {
    this.setState({ loading: true });
    const { query = '' } = this.state;
    const ethnicMinorities = await apis.getEthnicMinorities();
    const filterEthnicMinorities = ethnicMinorities.filter(ethnicMinority => {
      const { type, type_en } = ethnicMinority;
      const typeFlag = query ? type.toLowerCase().includes(query.toLowerCase()) : true;
      const typeEnFlag = query ? type_en.toLowerCase().includes(query.toLowerCase()) : true;
      return typeFlag || typeEnFlag;
    });
    this.setState({ ethnicMinorities, filterEthnicMinorities, loading: false });
  }

  renderTable(loading, filterEthnicMinorities = []) {
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
              <caption className="text-white text-center bg-danger">
                Ethnic Minorities ({filterEthnicMinorities.length})
              </caption>
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
      </div>
    );
  }

  render() {
    const { filterEthnicMinorities = [], loading = true } = this.state;

    return (
      <div id="EthnicMinorities">
        <main className="container mt-3">
          <Card className="shadow w-100">
            <Card.Body>
              <Code method={'GET'} url={`ethnic-minorities`}></Code>
              <Form className="mt-3 mb-3 w-100">
                <Form.Control
                  type="text"
                  placeholder="Type"
                  value={this.state.value}
                  onChange={this.filter}></Form.Control>
              </Form>
              {this.renderTable(loading, filterEthnicMinorities)}
            </Card.Body>
          </Card>
        </main>
      </div>
    );
  }
}

export default EthnicMinorities;
