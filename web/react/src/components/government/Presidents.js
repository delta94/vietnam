import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class GovernmentPresidents extends Component {
  constructor() {
    super();

    this.state = { presidents: [], loading: true };

    this.getPresidents = this.getPresidents.bind(this);
  }

  async componentDidMount() {
    await this.getPresidents();
  }

  async getPresidents() {
    const { ministry } = this.state;
    this.setState({ loading: true });
    const presidents = await apis.getPresidents(ministry);
    this.setState({ presidents, loading: false });
  }

  render() {
    const { presidents = [], loading = false } = this.state;

    return (
      <div id="Presidents">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Ministers ({presidents.length})</Card.Title>
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
                      {presidents.length
                        ? presidents.map((minister, index) => {
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

export default GovernmentPresidents;
