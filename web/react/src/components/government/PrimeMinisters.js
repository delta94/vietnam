import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class GovernmentPrimeMinisters extends Component {
  constructor() {
    super();

    this.state = { primeMinisters: [], loading: true };

    this.getPrimeMinisters = this.getPrimeMinisters.bind(this);
  }

  async componentDidMount() {
    await this.getPrimeMinisters();
  }

  async getPrimeMinisters() {
    const { ministry } = this.state;
    this.setState({ loading: true });
    const primeMinisters = await apis.getPrimeMinisters(ministry);
    this.setState({ primeMinisters, loading: false });
  }

  render() {
    const { primeMinisters = [], loading = false } = this.state;

    return (
      <div id="GovernmentPrimeMinisters">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Ministers ({primeMinisters.length})</Card.Title>
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
                      {primeMinisters.length
                        ? primeMinisters.map((minister, index) => {
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

export default GovernmentPrimeMinisters;
