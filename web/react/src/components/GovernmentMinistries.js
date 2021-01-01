import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { baseAPI } from '../configs';

class GovernmentMinistries extends Component {
  constructor() {
    super();

    this.state = { ministries: [], loading: true };

    this.getMinistries = this.getMinistries.bind(this);
  }

  async componentDidMount() {
    await this.getMinistries();
  }

  getMinistries() {
    const self = this;
    const url = `${baseAPI}/government/ministries`;

    fetch(url)
      .then(res => res.json())
      .then((ministries = []) => {
        console.log('getMinistries', ministries);
        self.setState({ ministries, loading: false });
      });
  }

  render() {
    const { ministries = [], loading = false } = this.state;
    console.log('loading', loading);
    console.log('ministries', ministries);
    return (
      <div id="GovernmentMinistries">
        <div className="mt-3 w-100">
          <Card>
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
                        <th>Name</th>
                        <th>Level</th>
                        <th>Incumbent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ministries.length
                        ? ministries.map((ministry, index) => {
                            const { incumbent = '', name = '', level = '' } = ministry;
                            return (
                              <tr key={index}>
                                <td>{level}</td>
                                <td>{name}</td>
                                <td>{incumbent}</td>
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
