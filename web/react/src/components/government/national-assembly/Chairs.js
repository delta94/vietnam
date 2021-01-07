import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

class GovernmentNationalAssemblyChairs extends Component {
  constructor() {
    super();

    this.state = { chairs: [], loading: true };

    this.getNationalAssemblyChairs = this.getNationalAssemblyChairs.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getNationalAssemblyChairs();
  }

  async getNationalAssemblyChairs() {
    this.setState({ loading: true });
    const chairs = await apis.getNationalAssemblyChairs();
    this.setState({ chairs, loading: false });
  }

  renderTable(loading, chairs = []) {
    return (
      <div id="table">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <div className="table-responsive table-container">
            <table className="table">
              <caption className="text-center text-white bg-danger">
                National Assembly Chairs ({chairs.length})
              </caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody>
                {chairs.length
                  ? chairs.map((minister, index) => {
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
      </div>
    );
  }

  render() {
    const { chairs = [], loading = false } = this.state;

    return (
      <div id="GovernmentNationalAssemblyChairs">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>{this.renderTable(loading, chairs)}</Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default GovernmentNationalAssemblyChairs;
