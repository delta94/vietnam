import React, { Component } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';

import { apis } from '../services';

class LicensePlates extends Component {
  constructor() {
    super();

    this.state = { query: '', licensePlates: [], filterLicensePlates: [], loading: true };

    this.getLicensePlates = this.getLicensePlates.bind(this);
    this.renderTable = this.renderTable.bind(this);
    this.filter = this.filter.bind(this);
  }

  async componentDidMount() {
    await this.getLicensePlates();
  }

  filter(event) {
    const { value: query = '' } = event.target;
    this.setState({ query });
    const { licensePlates = [] } = this.state;
    const filterLicensePlates = licensePlates.filter(licensePlate => {
      const { license } = licensePlate;
      return query ? license.toLowerCase().includes(query.toLowerCase()) : true;
    });
    this.setState({ filterLicensePlates });
  }

  async getLicensePlates() {
    this.setState({ loading: true });
    const { query = '' } = this.state;
    const licensePlates = await apis.getLicensePlates();
    const filterLicensePlates = licensePlates.filter(licensePlate => {
      const { license } = licensePlate;
      return query ? license.toLowerCase().includes(query.toLowerCase()) : true;
    });
    this.setState({ licensePlates, filterLicensePlates, loading: false });
  }

  renderTable(loading, filterLicensePlates = []) {
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <div className="table-responsive table-container h-60vh">
            <table className="table">
              <caption className="text-center text-white bg-danger">
                License Plates ({filterLicensePlates.length})
              </caption>
              <thead>
                <tr>
                  <th>License</th>
                  <th>Definition</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {filterLicensePlates.length
                  ? filterLicensePlates.map((licensePlate, index) => {
                      const { license = '', definition = '', type = '' } = licensePlate;
                      return (
                        <tr key={index}>
                          <td>{license}</td>
                          <td>{definition}</td>
                          <td>{type}</td>
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
    const { filterLicensePlates = [], loading = true } = this.state;

    return (
      <div id="LicensePlates">
        <main className="container">
          <div className="mt-3 w-100">
            <Card className="shadow">
              <Card.Body>
                <Form className="mb-3 w-100">
                  <Form.Control
                    type="text"
                    placeholder="License"
                    value={this.state.value}
                    onChange={this.filter}></Form.Control>
                </Form>
                {this.renderTable(loading, filterLicensePlates)}
              </Card.Body>
            </Card>
          </div>
        </main>
      </div>
    );
  }
}

export default LicensePlates;
