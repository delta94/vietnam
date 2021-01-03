import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class MapsDistricts extends Component {
  constructor() {
    super();

    this.state = { postalCodes: [], loading: true };

    this.getPostalCodes = this.getPostalCodes.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getPostalCodes();
  }

  async getPostalCodes() {
    await this.setState({ loading: true });
    const postalCodes = await apis.getPostalCodes();
    await this.setState({ postalCodes, loading: false });
  }

  renderTable(loading, postalCodes) {
    return (
      <div className="table-responsive table-container">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <table className="table">
            <caption className="text-white text-center bg-danger">
              Postal Codes ({postalCodes.length})
            </caption>
            <thead>
              <tr>
                <th>Code</th>
                <th>Province</th>
              </tr>
            </thead>
            <tbody>
              {postalCodes.length
                ? postalCodes.map((district, index) => {
                    const { code = '', province = '' } = district;
                    return (
                      <tr key={index}>
                        <td>{code}</td>
                        <td>{province}</td>
                      </tr>
                    );
                  })
                : ''}
            </tbody>
          </table>
        )}
      </div>
    );
  }

  render() {
    const { postalCodes = [], loading = true } = this.state;
    return (
      <div id="MapsDistricts">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>{this.renderTable(loading, postalCodes)}</Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default MapsDistricts;
