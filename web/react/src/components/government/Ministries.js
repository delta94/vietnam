import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class GovernmentMinistries extends Component {
  constructor() {
    super();

    this.state = { ministries: [], loading: true };

    this.getMinistries = this.getMinistries.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getMinistries();
  }

  async getMinistries() {
    this.setState({ loading: true });
    const ministries = await apis.getMinistries();
    this.setState({ ministries, loading: false });
  }

  renderTable(loading, ministries = []) {
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
              Ministries ({ministries.length})
            </caption>
            <thead>
              <tr>
                <th>Level</th>
                <th>Level (EN)</th>
                <th>Name</th>
                <th>Name (EN)</th>
              </tr>
            </thead>
            <tbody>
              {ministries.length
                ? ministries.map((ministry, index) => {
                    const { name = '', name_en = '', level = '', level_en = '' } = ministry;
                    return (
                      <tr key={index}>
                        <td>{level}</td>
                        <td>{level_en}</td>
                        <td>{name}</td>
                        <td>{name_en}</td>
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
    const { ministries = [], loading = false } = this.state;
    console.log('loading', loading);
    console.log('ministries', ministries);
    return (
      <div id="GovernmentMinistries">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>{this.renderTable(loading, ministries)}</Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default GovernmentMinistries;
