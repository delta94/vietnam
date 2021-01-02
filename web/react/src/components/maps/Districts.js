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
    const self = this;

    self.setState({ loading: true });
    const districts = await apis.getDistricts();
    self.setState({ districts, loading: false });
  }

  render() {
    const { districts, loading } = this.state;
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
                        <th>Start</th>
                        <th>End</th>
                      </tr>
                    </thead>
                    <tbody>
                      {districts.length
                        ? districts.map((district, index) => {
                            const { name = '', start_date = '', end_date = '' } = district;
                            return (
                              <tr key={index}>
                                <td>{name}</td>
                                <td>{start_date}</td>
                                <td>{end_date.toUpperCase()}</td>
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
