import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

import { apis } from '../../services';

class SportsClubs extends Component {
  constructor() {
    super();

    this.state = { clubs: [], loading: true };

    this.getSportsClubs = this.getSportsClubs.bind(this);
  }

  async componentDidMount() {
    await this.getSportsClubs();
  }

  async getSportsClubs() {
    const self = this;

    self.setState({ loading: true });
    const clubs = await apis.getSportsClubs();
    self.setState({ clubs, loading: false });
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
              <Card.Title className="text-center">Clubs ({clubs.length})</Card.Title>
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
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default SportsClubs;
