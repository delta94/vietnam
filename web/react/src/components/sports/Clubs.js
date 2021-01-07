import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { Code } from '../globals';
import { apis } from '../../services';

class SportsClubs extends Component {
  constructor() {
    super();

    this.state = { clubs: [], loading: true };

    this.getSportsClubs = this.getSportsClubs.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  async componentDidMount() {
    await this.getSportsClubs();
  }

  async getSportsClubs() {
    this.setState({ loading: true });
    const clubs = await apis.getSportsClubs();
    this.setState({ clubs, loading: false });
  }

  renderTable(loading, clubs = []) {
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
              <caption className="text-white text-center bg-danger">Clubs ({clubs.length})</caption>
              <thead>
                <tr>
                  <th>Sport</th>
                  <th>Competition</th>
                  <th>City</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {clubs.length
                  ? clubs.map((club, index) => {
                      const { sport = '', name = '', competition = '', city = '' } = club;
                      return (
                        <tr key={index}>
                          <td>{sport}</td>
                          <td>{competition}</td>
                          <td>{city}</td>
                          <td>{name}</td>
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
    const { clubs = [], loading = false } = this.state;
    console.log('loading', loading);
    console.log('clubs', clubs);

    return (
      <div id="SportsClubs">
        <div className="mt-3 w-100">
          <Card className="shadow">
            <Card.Body>
              <Code method={'GET'} url={`sports/clubs`}></Code>
              {this.renderTable(loading, clubs)}
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default SportsClubs;
