import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class GovernmentNationalAssemblyChairs extends Component {
  constructor() {
    super();

    this.state = { nationalAssemblyChairs: [], loading: true };

    this.getNationalAssemblyChairs = this.getNationalAssemblyChairs.bind(this);
  }

  async componentDidMount() {
    await this.getNationalAssemblyChairs();
  }

  async getNationalAssemblyChairs() {
    const { ministry } = this.state;
    this.setState({ loading: true });
    const nationalAssemblyChairs = await apis.getNationalAssemblyChairs(ministry);
    this.setState({ nationalAssemblyChairs, loading: false });
  }

  render() {
    const { nationalAssemblyChairs = [], loading = false } = this.state;

    return (
      <div id="GovernmentNationalAssemblyChairs">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">
                Chairs ({nationalAssemblyChairs.length})
              </Card.Title>
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
                      {nationalAssemblyChairs.length
                        ? nationalAssemblyChairs.map((minister, index) => {
                            const { name = '', start_date = '', end_date = '' } = minister;
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

export default GovernmentNationalAssemblyChairs;
