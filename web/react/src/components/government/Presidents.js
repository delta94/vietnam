import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class GovernmentPresidents extends Component {
  constructor() {
    super();

    this.state = { presidents: [], loading: true };

    this.getPresidents = this.getPresidents.bind(this);
    this.renderTable = this.renderTable.bind(this);
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

  renderTable(loading, presidents) {
    return (
      <div className="table-responsive table-container">
        {loading && (
          <div className="text-center">
            <Spinner animation="border" variant="danger"></Spinner>
          </div>
        )}
        {!loading && (
          <table className="table">
            <caption className="text-center text-white bg-danger">
              Presidents ({presidents.length})
            </caption>
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
        )}
      </div>
    );
  }

  render() {
    const { presidents = [], loading = false } = this.state;

    return (
      <div id="Presidents">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>{this.renderTable(loading, presidents)}</Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default GovernmentPresidents;
