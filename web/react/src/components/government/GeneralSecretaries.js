import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

import { Code } from '../globals';

class GovernmentGeneralSecretaries extends Component {
  constructor() {
    super();

    this.state = { generalSecretaries: [], loading: true };

    this.getGeneralSecretaries = this.getGeneralSecretaries.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getGeneralSecretaries();
  }

  async getGeneralSecretaries() {
    this.setState({ loading: true });
    const generalSecretaries = await apis.getGeneralSecretaries();
    this.setState({ generalSecretaries, loading: false });
  }

  renderTable(loading, generalSecretaries = []) {
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
              <caption className="bg-danger text-white text-center">
                General Secretaries ({generalSecretaries.length})
              </caption>
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
      </div>
    );
  }

  render() {
    const { generalSecretaries = [], loading = false } = this.state;

    return (
      <div id="GovernmentGeneralSecretaries">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Code method={'GET'} url={`government/general-secretaries`}></Code>
              {this.renderTable(loading, generalSecretaries)}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default GovernmentGeneralSecretaries;
