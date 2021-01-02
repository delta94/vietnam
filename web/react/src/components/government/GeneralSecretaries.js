import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class GovernmentGeneralSecretaries extends Component {
  constructor() {
    super();

    this.state = { generalSecretaries: [], loading: true };

    this.getGeneralSecretaries = this.getGeneralSecretaries.bind(this);
  }

  async componentDidMount() {
    await this.getGeneralSecretaries();
  }

  async getGeneralSecretaries() {
    const { ministry } = this.state;
    this.setState({ loading: true });
    const generalSecretaries = await apis.getGeneralSecretaries(ministry);
    this.setState({ generalSecretaries, loading: false });
  }

  render() {
    const { generalSecretaries = [], loading = false } = this.state;

    return (
      <div id="GovernmentGeneralSecretaries">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">
                Secretaries ({generalSecretaries.length})
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
                      {generalSecretaries.length
                        ? generalSecretaries.map((minister, index) => {
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

export default GovernmentGeneralSecretaries;
