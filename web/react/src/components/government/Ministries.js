import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class GovernmentMinistries extends Component {
  constructor() {
    super();

    this.state = { ministries: [], loading: true };

    this.getMinistries = this.getMinistries.bind(this);
  }

  async componentDidMount() {
    await this.getMinistries();
  }

  async getMinistries() {
    const self = this;

    self.setState({ loading: true });
    const ministries = await apis.getMinistries();
    self.setState({ ministries, loading: false });
  }

  render() {
    const { ministries = [], loading = false } = this.state;
    console.log('loading', loading);
    console.log('ministries', ministries);
    return (
      <div id="GovernmentMinistries">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center">Ministries ({ministries.length})</Card.Title>
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
                </div>
              )}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default GovernmentMinistries;
