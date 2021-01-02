import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class MapsDistricts extends Component {
  constructor() {
    super();

    this.state = { postalCodes: [], loading: true };

    this.getPostalCodes = this.getPostalCodes.bind(this);
  }

  async componentDidMount() {
    await this.getPostalCodes();
  }

  async getPostalCodes() {
    await this.setState({ loading: true });
    const postalCodes = await apis.getPostalCodes();
    await this.setState({ postalCodes, loading: false });
  }

  render() {
    const { postalCodes = [], loading = true } = this.state;
    return (
      <div id="MapsDistricts">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Districts ({postalCodes.length})</Card.Title>
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
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default MapsDistricts;
