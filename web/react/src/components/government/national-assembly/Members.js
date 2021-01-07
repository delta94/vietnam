import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../../services';

class GovernmentNationalAssemblyMembers extends Component {
  constructor() {
    super();

    this.state = { members: [], no: 14, loading: true };

    this.getNationalAssemblyMembers = this.getNationalAssemblyMembers.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getNationalAssemblyMembers();
  }

  async getNationalAssemblyMembers() {
    const { no } = this.state;
    this.setState({ loading: true });
    const members = await apis.getNationalAssemblyMembers(no);
    this.setState({ members, loading: false });
  }

  renderTable(loading, members = []) {
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
                National Assembly Members ({members.length})
              </caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Start</th>
                  <th>End</th>
                </tr>
              </thead>
              <tbody>
                {members.length
                  ? members.map((member, index) => {
                      const { name = '', start_date = '', end_date = '' } = member;
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
    const { members = [], loading = false } = this.state;

    return (
      <div id="GovernmentNationalAssemblyMembers">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>{this.renderTable(loading, members)}</Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default GovernmentNationalAssemblyMembers;
