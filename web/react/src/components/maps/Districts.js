import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class MapsDistricts extends Component {
  constructor() {
    super();

    this.state = { districts: [], loading: true };

    this.getDistricts = this.getDistricts.bind(this);
  }

  async componentDidMount() {
    await this.getDistricts();
  }

  async getDistricts() {
    await this.setState({ loading: true });
    const districts = await apis.getDistricts();
    await this.setState({ districts, loading: false });
  }

  render() {
    const { districts = [], loading = true } = this.state;
    return (
      <div id="MapsDistricts">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Districts ({districts.length})</Card.Title>
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
                        <th>Level</th>
                        <th>Province</th>
                      </tr>
                    </thead>
                    <tbody>
                      {districts.length
                        ? districts.map((district, index) => {
                            const { name = '', level = '', province = '' } = district;
                            return (
                              <tr key={index}>
                                <td>{name}</td>
                                <td>{level}</td>
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
